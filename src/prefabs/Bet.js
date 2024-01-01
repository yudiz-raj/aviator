
// You can write more code here

/* START OF COMPILED CODE */

class Bet extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -1);

		// bet_state_base
		const bet_state_base = scene.add.image(0, 0, "bet-state-base");
		bet_state_base.scaleX = 1.5;
		bet_state_base.scaleY = 2;
		this.add(bet_state_base);

		// cancel_button
		const cancel_button = scene.add.image(139, -166, "cancel-button");
		cancel_button.scaleX = 0.5;
		cancel_button.scaleY = 0.5;
		this.add(cancel_button);

		// stake_base
		const stake_base = scene.add.image(0, -72, "stake-base");
		stake_base.scaleX = 1.5;
		stake_base.scaleY = 1.5;
		this.add(stake_base);

		// stake_txt
		const stake_txt = scene.add.text(0, -128, "", {});
		stake_txt.setOrigin(0.5, 0.5);
		stake_txt.text = "STAKE";
		stake_txt.setStyle({ "align": "center", "fontSize": "32px" });
		this.add(stake_txt);

		// stake_value
		const stake_value = scene.add.text(0, -72, "", {});
		stake_value.setOrigin(0.5, 0.5);
		stake_value.text = "10";
		stake_value.setStyle({ "align": "center", "fontSize": "36px" });
		this.add(stake_value);

		// autoEject_base
		const autoEject_base = scene.add.image(0, 100, "autoEject-base");
		autoEject_base.scaleX = 1.5;
		autoEject_base.scaleY = 1.5;
		this.add(autoEject_base);

		// autoEject_txt
		const autoEject_txt = scene.add.text(0, 44, "", {});
		autoEject_txt.setOrigin(0.5, 0.5);
		autoEject_txt.text = "AUTO EJECT";
		autoEject_txt.setStyle({ "align": "center", "fontSize": "32px" });
		this.add(autoEject_txt);

		// autoEject_value
		const autoEject_value = scene.add.text(0, 100, "", {});
		autoEject_value.setOrigin(0.5, 0.5);
		autoEject_value.setStyle({ "align": "center", "fontSize": "36px" });
		this.add(autoEject_value);

		this.stake_base = stake_base;
		this.stake_value = stake_value;
		this.autoEject_base = autoEject_base;
		this.autoEject_value = autoEject_value;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	stake_base;
	/** @type {Phaser.GameObjects.Text} */
	stake_value;
	/** @type {Phaser.GameObjects.Image} */
	autoEject_base;
	/** @type {Phaser.GameObjects.Text} */
	autoEject_value;

	/* START-USER-CODE */

	// Write your code here.
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
