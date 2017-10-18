/*** Created by darren on 17/10/2017.*/

//States
var GameState =
    {
        //initiate game settings
        init: function ()
        {
            //enables global physics
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.arcade.gravity.y = 10;
        },

        //load the game assets before the game starts
        preload: function ()
        {
            this.load.image('background','assets/images/background.jpeg');
            this.load.image('player','assets/images/player.png');
            this.load.image('barrel','assets/images/barrel.jpg');
            this.load.image('steelbeam','assets/images/steelbeam.jpg');
        },

        //create after everything is pre-loaded
        create: function ()
        {
            //creates a background
            this.background = this.game.add.sprite(0, 0, 'background');

            //creates a player
            this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
            this.player.anchor.setTo(0.5, 0.5);
            this.player.scale.setTo(-0.1,0.1);
            this.game.physics.arcade.enable(this.player);
            this.player.body.collideWorldBounds = true;


            //creates a barrel
            this.barrel = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'barrel');
            this.barrel.scale.setTo(0.03,0.03);
            this.barrel.anchor.setTo(-2,-2)
            this.game.physics.arcade.enable(this.barrel);
            this.barrel.body.allowGravity = false;
            this.barrel.body.immovable = true;

            //creates a steelbeam
            this.steelbeam = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'steelbeam');
            this.steelbeam.anchor.setTo(2,-2);
            this.steelbeam.scale.setTo(0.05);
            this.game.physics.arcade.enable(this.steelbeam);
            this.steelbeam.body.allowGravity = false;
            this.steelbeam.body.immovable = true;
        },

        //on-going loop
        update: function ()
        {
            ///*****************************************************
            ///Below Code is just for testing
            ///this.barrel = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'barrel');
            ///this.barrel.scale.setTo(0.03,0.03);
            ///*****************************************************
            //  only move when you click
            //game.physics.arcade.moveToPointer('player', 400);
            //  only move when you click
            if (game.input.mousePointer.isDown)
            {
                //  400 is the speed it will move towards the mouse
                game.physics.arcade.moveToPointer('player', 400);

                //  if it's overlapping the mouse, don't move any more
                if (Phaser.Rectangle.contains('player'.body, game.input.x, game.input.y))
                {
                    'player'.body.velocity.setTo(0, 0);
                }
            }
            // else
            // {
            //     sprite.body.velocity.setTo(0, 0);
            // }
        }
    };

//Creates Phaser Framework
var game = new Phaser.Game(640, 360, Phaser.AUTO, 'ff_game');
//Load States
game.state.add('GameState', GameState);
//Initialise States
game.state.start('GameState');
