// Evermore RPG System 2.0
// Import system data from the centralized file
import { ATTRIBUTES, KIN, BACKGROUNDS, ORIGINS, DEFAULT_HP, ITEM_TYPES } from "./systemData.js";

// Define the character sheet class
class Evermore2CharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["evermore2", "sheet", "actor"],
      template: "systems/evermore2/templates/character-sheet.html",
      width: 720,
      height: 680,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "features" }]
    });
  }

  getData() {
    // Get the base data
    const data = super.getData();
    
    // Add the actor's data to the sheet data
    const actorData = this.actor.toObject(false);
    
    // Ensure items are included in the actor data
    actorData.items = this.actor.items.map(i => {
      const item = i.toObject(false);
      // Make sure _id is set
      item._id = i.id;
      return item;
    });
    
    data.actor = actorData;
    
    // Initialize system if it doesn't exist
    if (!data.actor.system) data.actor.system = {};
    
    // Initialize attributes if they don't exist
    if (!data.actor.system.attributes) {
      data.actor.system.attributes = Object.fromEntries(
        Object.values(ATTRIBUTES).map(attr => [
          attr.key, 
          { 
            value: attr.defaultValue, 
            max: attr.max,
            description: attr.description 
          }
        ])
      );
    }
    
    // Initialize HP if it doesn't exist
    if (!data.actor.system.hp) {
      data.actor.system.hp = { ...DEFAULT_HP };
    }
    
    // Initialize persona if it doesn't exist
    if (!data.actor.system.persona) {
      data.actor.system.persona = {
        kin: { value: "" },
        background: { value: "" }
      };
    } else {
      // Initialize kin if it doesn't exist
      if (!data.actor.system.persona.kin) {
        data.actor.system.persona.kin = { value: "" };
      }
      
      // Initialize background if it doesn't exist
      if (!data.actor.system.persona.background) {
        data.actor.system.persona.background = { value: "" };
      }
    }
    
    // Add config data for dropdowns
    data.config = CONFIG.Evermore2;
    
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    // Add Inventory Item
    html.find('.item-create').click(this._onItemCreate.bind(this));

    // Update Inventory Item
    html.find('.item-edit').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.sheet.render(true);
    });

    // Delete Inventory Item
    html.find('.item-delete').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.delete();
      li.slideUp(200, () => this.render(false));
    });

    // Rollable abilities
    html.find('.rollable').click(this._onRoll.bind(this));
  }

  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @param {Event} event   The originating click event
   * @private
   */
  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    // Get the type of item to create.
    const type = header.dataset.type;
    
    // Prepare the item object.
    const itemData = {
      name: `New ${type.capitalize()}`,
      type: type,
      system: {}
    };
    
    // Add default values from our centralized data
    if (ITEM_TYPES[type] && ITEM_TYPES[type].defaults) {
      itemData.system = { ...ITEM_TYPES[type].defaults };
    }
    
    // Finally, create the item!
    const item = await Item.create(itemData, {parent: this.actor});
    
    // Refresh the sheet
    this.render(false);
    
    return item;
  }

  /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
  _onRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;

    if (dataset.roll) {
      let roll = new Roll(dataset.roll, this.actor.getRollData());
      let label = dataset.label ? `Rolling ${dataset.label}` : '';
      roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: label
      });
    }
  }
}

// Define the item sheet class
class Evermore2ItemSheet extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["evermore2", "sheet", "item"],
      width: 520,
      height: 480,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }

  get template() {
    const path = "systems/evermore2/templates/";
    return `${path}item-${this.item.type}-sheet.html`;
  }

  getData() {
    const data = super.getData();
    
    // Add config data for dropdowns
    data.config = CONFIG.Evermore2;
    
    // Initialize system data for new items using our centralized data
    if (this.item.isNew) {
      const type = this.item.type;
      if (ITEM_TYPES[type] && ITEM_TYPES[type].defaults) {
        // Apply default values for new items
        const defaults = ITEM_TYPES[type].defaults;
        if (!data.item.system) data.item.system = {};
        
        // Set default values for this item type
        for (const [key, value] of Object.entries(defaults)) {
          if (data.item.system[key] === undefined) {
            data.item.system[key] = value;
          }
        }
      }
    }
    
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
  }
}

// Initialize the system
Hooks.once("init", function() {
  console.log("Evermore2 | Initializing Evermore RPG System 2.0");
  
  // Define custom document classes
  CONFIG.Actor.documentClass = Actor;
  CONFIG.Item.documentClass = Item;
  
  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("evermore2", Evermore2CharacterSheet, { 
    makeDefault: true,
    types: ["character"]
  });
  
  // Register item sheets
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("evermore2", Evermore2ItemSheet, {
    makeDefault: true
  });
  
  // Initialize system data using our centralized data source
  CONFIG.Evermore2 = {
    // Convert attributes to the format needed for CONFIG
    attributes: Object.fromEntries(
      Object.values(ATTRIBUTES).map(attr => [attr.key, attr.label])
    ),
    
    // Convert kin data to the format needed for CONFIG
    kin: Object.fromEntries(
      Object.values(KIN).map(k => [
        k.key, 
        {
          name: k.label,
          traits: k.traits,
          descriptionLong: k.descriptionLong
        }
      ])
    ),
    
    // Convert background data to the format needed for CONFIG
    backgrounds: Object.fromEntries(
      Object.values(BACKGROUNDS).map(bg => [
        bg.key, 
        {
          name: bg.label,
          traits: bg.traits,
          descriptionLong: bg.descriptionLong
        }
      ])
    ),
    
    // Add origins data
    origins: Object.fromEntries(
      Object.values(ORIGINS).map(origin => [
        origin.key,
        {
          label: origin.label,
          options: origin.options
        }
      ])
    )
  };
});

// Setup system data
Hooks.once("setup", function() {
  console.log("Evermore2 | Setting up Evermore RPG System 2.0");
});

// When ready
Hooks.once("ready", function() {
  console.log("Evermore2 | Evermore RPG System 2.0 Ready");
});

// Helper function to capitalize first letter
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};