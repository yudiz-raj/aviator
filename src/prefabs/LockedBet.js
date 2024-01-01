
// You can write more code here

/* START OF COMPILED CODE */

class LockedBet extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// blue_base
		const blue_base = scene.add.image(0, 0, "blue-base");
		blue_base.scaleX = 1.5;
		blue_base.scaleY = 1.5;
		this.add(blue_base);

		// eject_base
		const eject_base = scene.add.image(0, -59, "red-base");
		this.add(eject_base);

		// eject_txt_img
		const eject_txt_img = scene.add.image(0, -59, "eject-txt-img");
		this.add(eject_txt_img);

		// ejectValue_txt
		const ejectValue_txt = scene.add.text(0, 54, "", {});
		ejectValue_txt.setOrigin(0.5, 0.5);
		ejectValue_txt.tintFill = true;
		ejectValue_txt.tintBottomLeft = 8965616;
		ejectValue_txt.tintBottomRight = 8965616;
		ejectValue_txt.text = " 10 ";
		ejectValue_txt.setStyle({ "fontSize": "48px", "fontStyle": "bold italic" });
		this.add(ejectValue_txt);

		this.eject_base = eject_base;
		this.eject_txt_img = eject_txt_img;
		this.ejectValue_txt = ejectValue_txt;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	eject_base;
	/** @type {Phaser.GameObjects.Image} */
	eject_txt_img;
	/** @type {Phaser.GameObjects.Text} */
	ejectValue_txt;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
