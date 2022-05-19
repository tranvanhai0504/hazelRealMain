enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const dangerousItems = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.vy = -160
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (mySprite.vy >= 0) {
        mySprite.vy = 0
        mySprite.ay = 0
        if (isDown == 1) {
            mySprite.vy = 100
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -220
    }
})
scene.onOverlapTile(SpriteKind.enemy2, assets.tile`myTile62`, function (sprite, location) {
    animation.runImageAnimation(
    sprite,
    assets.animation`myAnim14`,
    200,
    true
    )
    sprite.setVelocity(randint(-80, -40), 0)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (delaySword == 100) {
        delaySword = 0
        if (vDarts == 150) {
            animation.runImageAnimation(
            sworf,
            assets.animation`myAnim1`,
            40,
            false
            )
        } else if (vDarts == -150) {
            animation.runImageAnimation(
            sworf,
            assets.animation`myAnim4`,
            50,
            false
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.vx = -150
})
scene.onOverlapTile(SpriteKind.enemy2, assets.tile`myTile61`, function (sprite, location) {
    animation.runImageAnimation(
    sprite,
    assets.animation`myAnim15`,
    200,
    true
    )
    sprite.setVelocity(randint(80, 40), 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    if (mySprite.vy >= 0) {
        mySprite.vy = 0
        mySprite.ay = 0
        if (isDown == 1) {
            mySprite.vy = 100
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (delaySuriken == 100) {
        myDart = sprites.createProjectileFromSprite(assets.image`myImage0`, mySprite, vDarts, 0)
        animation.runImageAnimation(
        myDart,
        assets.animation`myAnim7`,
        50,
        true
        )
        delaySuriken = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    mySprite.destroy(effects.fire, 500)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    isDown = 0
})
scene.onOverlapTile(SpriteKind.dangerousItems, assets.tile`myTile67`, function (sprite, location) {
    sprite.destroy(effects.disintegrate, 200)
    scene.cameraShake(4, 500)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isDown == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim3`,
        150,
        true
        )
    } else if (isDown == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim5`,
        200,
        true
        )
    }
    vDarts = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mySprite.destroy(effects.fire, 500)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Main character`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    vDarts = 150
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Main character1`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    vDarts = -150
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dangerousItems, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 200)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isDown == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim2`,
        150,
        true
        )
    } else if (isDown == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim21`,
        200,
        true
        )
    }
    vDarts = 150
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (canDie == 1) {
        info.changeLifeBy(-1)
        canDie = 0
    }
})
function nextLevel (num: number) {
    if (num == 1) {
        scene.setBackgroundImage(assets.image`Ice map`)
        tiles.setCurrentTilemap(tilemap`level1`)
        mySprite.setPosition(10, 160)
        for (let value of tiles.getTilesByType(assets.tile`myTile63`)) {
            snake = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(snake, value)
            animation.runImageAnimation(
            snake,
            assets.animation`myAnim17`,
            150,
            true
            )
            snake.y = value.y + -10
            snake.setVelocity(90, 0)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile69`)) {
            tree = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.enemy2)
            tiles.placeOnTile(tree, value)
            animation.runImageAnimation(
            tree,
            assets.animation`myAnim15`,
            200,
            true
            )
            tree.setVelocity(90, 0)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    } else if (num == 2) {
        scene.setBackgroundImage(img`
            cffcffccffccfcfffcccfffcfccccfcffcccccfccffffccccfccccccccccccccccccccccffcccccccccccccccccfffcfffcffffcfffffcfffccffcccccccccfcccccccffccffccffffffffccccffcff
            ccffffccfccffffffcccccffffccffcffcccfcccccffcccccccccccccccccccccccccccfffccccccccccccccccffffffcccffffcffffffffffcfcccfcccffcfcccccccfccffcccccffffffccccccfff
            fcffffccfcffffffcccccccffccfcccccffcffcffccccccccccccccccccccccccccfcfcffcfcccccccfcccccccffffffcffffffcffffcffffffcccccccccccccccccffccffccfcccfffffcccffccfff
            cffcffccffffffcccccccfccffccccccccfcffffcccfccccccccccccccccccccccccccffffcccccccccfccccccccfffccfcffffcffffccccfffffcccccccccccccccfccffcccccfffffffcfcfccffff
            ccfcffcffffffcccccfccccffcccccccccfffcfcfcccccccfcccccccccccccccccccfffffccfcccccccfccccccccfffccfcffcffcffffffccfffffccccccccccccfffccffccccfffffffccfcfcffcff
            ccccffcffffccccccccccccccccfcccccccffcccccccccccccccccccfcccccccccfccfccffcccccccccfcccfcccfffccfcfffcffcffcfffccffcffcccccccccccfffcccffccfccfffffccfffccffccf
            ccfccfccfffccccccccccccccccfcccccccffccccccccccccccccccccccccccccffccfffffccccccccffcccfccfffccccccfccffcfccccfcffccfffccccccccccfccccccfccfccffcffccfcfffffcff
            cccccfccfffccccccccccccccccccccccccfccccccccfcccccccccccccccccccccfccffccfccccccccfccccccffffccccccccfffcfccccfccccfffffccccccccccccccccfcffcfffcfcccffffffffff
            cccffccffffccccccccccccccccccccccccfccccccccfccccccccccccccccccccccfcfffcffcccccccfcccccccffcccccccccfffcfcccffcccfcffffcccccccccccccffffccccfcfffcffffccffffff
            cccffcffffccccccccccccccccccccccccffccccccccfcccccccccccccccccccccfffffffffccccccffcccccccffcccccccccccfcfcfcccccfcccccffccccfcfcccfcccffcccfccffccffffffffcfff
            cccfffffffccccccccccccccccccccccccffccfccccccfccccccccccccccccccccfffffffffccccccffccccccffccccccccccccffccccccccfccccffffcccccfcccffccffcccccfffcffffffffccffc
            ccffffffffffccfccccccccccccccccccfffcccccccfcfccccffcccfccccfccccccccfffffffccccfffcccfccffccccccccccccfccfccccfccccccfcfffcccccffcffcfffccccfcfcfcfffffffccfcc
            cffffffffffcccfcfccccccccccccccccffccfccccccccfcccffccccccccfccccccccfffffffcfcffffcfccccccccccccfcccccccffccccccccffcfffffcccccffcffffffccccfffffcffffccfffccf
            ffffffcfffcccccfffccccccccccfccffffccccccccccfcfcccffcccccccfcccccccccffffffccccfcccccccccccccccccccccccffccfccfccccccfccfccfcccfffffffcffcccfffcffffffccffcccf
            ffffffffffccccccfffcfcccccccccccffcccccfcccccccfcccffccccccffcccccccfcfcfffccccffcccccccccccccfccccccffffccccffcccccfcfcffccfccfcfffcccccfffcffffffffccccffccff
            ffffffcffccccccccfffccccccccfcfffccccccffccfccfcccccfccccccfccccccccfffcfffcccffcccccccccccccccccccccffffcccccccfcccfffcffccffcffffccccccccfffffccccccccfffcfff
            fffffccccfcccccccfcfcccccccfcccffccccfffcccfccfcccccffccccccccccccccffffffcccffcccfccccccccccccccccccfccffcccfcffccffccffccfffcfccccccccccffffffccccccffffcffff
            ffffcccccccfcccccfcffccccccfccffccccfcccccccccfcffcccffccccccccccccfffcfffcccffcccccccccfcccccccccccccccffcccfccfffffffffcfcffcccfcccccccccfffcfcccfffffffffffc
            fffffccfcccfcccccffffccfccffcccccccfccccccccfccccfccccccccccccfccccfffcfffccccfcccccccccfcffccccccccfccccfcffffffffffffcccccffccccccccccccfffccfcccfcffffffffff
            cffffccccccccccfccccfcccccfccccccccffcccffccccccffccccccccccffccccccffffcfcccffccccccfcccccfcccccccccccccffcffffffcccccfcffcfcfcccfccccccccccfffcccfffffcffffff
            fffcfcbccccccccfccfffccccccccccccccffccfffcccffccffcccccccccffcccccffffffccccfcccccccccccccfccccccccccccccfcfffffccccccffffcccccccccccccccffccffcccffffffffffff
            fffcfccccccccccffcfffccccccbcccccccfffccccfccffccffcccccccccffcccccfcffffccccfcccccccccccccccccccccccccccffccfffcccccccfffcccccccccccccccccccccfccfffffffffffff
            ffffcccccccccfccfccfffccccccccccccccffccccccccccccfcccccccfccfcccccfcffffccccfcccccccccccccccccccccccccfcffcffffccfcffcfccccccfcccccccccccccccffcccffffffffffff
            fffcccccccccccccccccffcccccccccccccccffffcccccffcfccccccccccfccccccfcfffcccccfccccccccccccccccccccccccccccfcfffcccfcfffcccccccccccccccccccccccfffccffffffffffff
            fffcccccccccccccfffcccccfcccccccccccfffcffcccfffcfcccccccccccccccccfffffccccffccccfccccfccccccccccccccfcccfcffcccccfcccfccccccccfccccccfccccccfffcccfffffffffff
            ffccccccccccccccfffcccfffcccccccccccffccffffffffffccccccccfccccccccffffcccccfcccccfccccfcccccccffcccccfffcfffcccccffccfccccccccccccccccccccfccffccccfffffffffff
            fccccccccccccccffffccffffcccccccccccffcccfffffffffccccccfffcccccccfffffffccffccccccccccccccccccffcccccfffcffccccccffccccccccffcccccccccccccfffffcccffffffffffff
            fccccccccccccccccffcfffffccccccfcccfcccccffcfcfffcccccccffcccccccfffcccfffffcccccccfccccccccccccccccccfffcfccccccccccffccccccccccccfcccccccfccfffcfffffffffffff
            cfcccccccccccccccffcfffffcccccfcfccccccccccffcffffffccccffccccccffcccccccffffcccccffcccccccccffcccccccffcccccccccccccffccccccccccccfcccccccfccfffcfffffffffffff
            cfccccccccccccccccccffffccccccccccccccfccccfcffffffccfccfccfcffcccccccccfcffffccccccccccccccccfccccccfcfccbcccccccccccfcccccccccccfcccccccfcccfffccffcfffffffff
            cffccccccccccccccccffffccccccccccccccccccccffffccffccffcfccfccccccccccccccfffcffcccccccccccccccfccccfcfcccccccccccccccffccccccccccfcfcfcccccfffffccffcffcfccfff
            cffccccccccccccccccfffccccccccccccccccccccfcfffccfccccffffffcccccccccccccfcffcffcccccccccfccccccccffffcbcccccccccccccfffccfcccccfcccccfcccccccfffccfffcccffffcf
            fccfcccccccccccccfffffccccccccccccccccccccccccfcccccccfffffccccccccccccccfccccfffccccccfccccccccfcfcfcccccccccccccfcccffcccccccccccccffffcccffffcccfcfcffcffcfc
            cccccfccfccccccccccffcbcccccccfccccccccccffcccccfccccccfccffbccccccccccccfcccccfccccccccfccfffcccfffcbcccccccccccccccccfccccccccccccccffccccfcccffccffffccfccfc
            ccccccfccccccccccffffcbccccccccccccccccccccccffccccccccccfffcccccccccccccccfcccfccfcccfcfccfcfcfcfcccccccccfcccccccccccccccccccccccccffcccccccfcfffcccfffcccfff
            ccfcccfcccccccccffffcccccccccccccccccccccccccfccffccccfccffccccccccccccccccfcccfccfccccccccccffffccccccccccccccccccccccccccccccfcfcccfcccfcffffccfffffffcccfffc
            ccccfcfcffcccccffffcccccccccccccccfcccccccccccccffccccffffcccccccccccccccccfccfcfcccccccccccfffcccccccccccccccccccfcccfcccccccfccfcccccccfffffccfffffcffcccffcc
            ccccfcfccffcccfffffcccccccccccccccfcccccccccccfccfccccffffcccccccccccccccccfccfffcccccccccccffccccccccccccccccccccfcccfcccccccccfffcccccccfffcccfcfffcffccccccc
            ccccfccccfffccfffffcccccccccccccccccccccccccccfcffffccffffcccccccccccccccfcccccffccccccccccffcccccccccccccccccccccccccccccccccccfffcccccccfcfcccfcfcfcffccccccc
            cccfccccccffccccfffcccfcccccccccccccccccccccccffffffccfffffccccccccccccfccccccffcccfccccccfffcccccccccccccccccccccccccccccccccfcfcccfccccccffcccfcfcfccfffccffc
            cccfcccccfffcccfffccccffcccccccfcfccccccccccffcfcfccccfffffcccccccccccccccffccfccfcffccccfffcccccccccccccccccccccccccfcfccccccfcffccfccccccfccfccccffccfffcccfc
            cfccccccffffcccfcfcfccfccccccccccccccccccccfffcfccfcccffccfcccccccccccccccfffccccffccccccfffcccccccccccccccfccccccccfcffccccfcccffccfccfccccccfcfccfcccfffffccc
            fccccfcccffccccccccccccccccccccccccccccccccffffcfffccfffccffccccccccccccffccccccccfcccccfffccccccccccccccccfccccccccccfcccccfcccfccfcccffcccccfcccfccccfffffccc
            cccccffcffccccccfcccccccccccccccccccccccccfcfffcfffccffcccffccccccccccccccccfcccccccccfffffccbccccccccccccccfcccccccccfcccccfcccfcffccccfccccccccccfcccccfcfccc
            cfcccfccfcccccccfccccccccfcccccccccccccfccfcccfffffccfccccfccccccccccccccccccccccccccccffffcbbccccccccccccfcfccccccfccccccccfcfcfcccccccccfcccccccccccfccfccccc
            ffcccccffcccccccccccccccccfcccccfcccccccffcfccfffffcffcccfccccccccccccccccccccccccccccccfffcccccccccccccccccfcccccccccccfcccccccfcfcccccccccccccfccccccccccfccc
            ccccccffccccccccfcccccccccfffccccccfcccccfcfcfccfcfccccccfcccccccccccccccccccccccccccccfffffccccccccccccccccfcccccccccccfccccccccfcccccccccccccccfccccccfccfccc
            cccccffcccccccccccccccccccffcccccccccccccfcccfccffccccccccccccccccccccccccccfcccccfcfccccccfccccccccccccccccccfccccccccccccccccccfcccccccccccccccfccccccfccfccc
            ccccfcfcccccccccccccccccccfcccccffffccffffccffcfffbcccccccccccccccccfccccccccccccccffccccccfccccccccccccccccccfccccccccccccccccccccccccccccccfccffcfcccccfffccc
            ccccfffcccccccccccccccccccfccfcffcfffffcccfccfccfcbccccccccccccccccccccccccccccccccfcccccccccccccccccccccccfccffcccccccccccfcccccccccccccccccfccfffccccccffcccc
            ccccffffccccccccccccccccccfcccccffcccfffccfcccfcccbcccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccffccccccccccccccfcccccccccccccffccfcccfcccfffcccc
            cccfcfffcccccccccccccccccffcccccffcfcccfcfcccccccccccccccccccccccccccccccfccccccccccccccccfccccccccfccccccccccfccccfccccccccccccccccccccccccccfcffcfffccffccccc
            cccccfffcccccccccccccccccfcccccfcfcfcccfcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccffccfffccfccccfccccc
            fcccfffcccccccccccccccccccccccfcccfcccccffcccccccfcccccccccccccccccccfccccccccccccccccccccccccccccccccccccccfcffcccccccccccccccccccccccccccffccfffccccccccfcccc
            fccfffcfccccccccccccccccccccccfcccfcccfffcccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccfcccccccccccccccccccccccccccccfcccfccccccccffcccc
            cfffffccfcbcccfccccfccccccccfcccccfcfcffccccccccccfccccccccccccccccccfccccfcccccccccfffcccccccfccccccccccccffccccccccccccccccccccccccccccccffcfcfccccccccfccccc
            cccffccccfccccfccccfcccccccccccccfcccfffccccccccfccccccccccccccccccccccfcccccccccccfccccccccccfccccccccfcccfcccccccccccccccccccccccccccccccfccfcccfccccffcccccc
            cccffccccffcccfccccfccccccccccccccccffffcccccccccccccccccccccccccccccccfcfccfcccccfccbccccccccccccfccccccffcccccfcccccccccccccccccccccccccccfcffccffccfffcccccc
            ccccccccccccfffccccfccccfcccccccccfcccffccccccccccccffccccccccccccccccfcccccccccccccccccccccccccccfccffcccfccccccccccccccccccccccccccccccccccffcccffccfcccccccc
            cccccccccccccfcfccfffcccfcccccccccccccffcccccccccccccfccccccccccccccccfcccccccccfcccccccccccccccccfcccfcccccccccccccccccccccfcccccccccccccccffcccffccfccccccccf
            ccccccccccccccfccccffcccccccccccccccffffcccccccccccccccccccccfcccccccccccccccccccbcccccccccccccccfcccccfcccccccccccccccffcccccfcccccccccccfcffcccfccccccccccccf
            ccccfcccccccccccccccfffcccccccccfcccfffccccccccccccccccccccccfccccccccccccccccccbccccccccccccccccccccccfcfcccccfcccccccfccccccfcccccccccccfcccccccccccccccccccc
            cccffccccccccccccccccffffcccccccffffffccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccfccfccccfcfccccfccccccccccccccfccccccccccccccccccccfccccccccccc
            ccccccccccccccccfccccffccccffffffcccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccfcfcccccccccccccccccccccccccfccccccccccccccccfccccccc
            ccccccccccccccccfccccffccccffffffcccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccfcfcccccccccccccccccccccccccfccccccccccccccccfccccccc
            fccccccccccccccffccccfccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccfcfccccccccccccccccccccccccccccccccccfccccccccccccffc
            ccccccccccccfccffccccfcccccccfcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccffcccccccccccccccccccfccccccccccccccccccccccfcccccc
            ccfcccccccccfcccffcccccccccccfcffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccfcccccccccccccccccccccccccffccccfccccccccccccfcfccc
            ccfcccccccccfcccffcccfccccccfcccfcfcccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccfffcffcccccccccccccccccccfcccccfcbcccfccccccccccccffcccc
            ccccccccccccccccffcccfccccccfcccccffccccccfccccccccccccccccccccccccccccccccfccccccccccccccccccccccfccccfcfcfccfccffccccccccccccccccccffcbcccccccccccccfcfcccccc
            ccfccccccccccccffccfcfcccccccccccccfffccccccccccccccccccccccccccccccccccccfcfccccccccccccccccccccccccccfcffcccfffffcccccccccccfccccccffcbcccccccccffccfcccccfff
            ccfccccccccccccffccfcfcccccccccccccfffccccccccccccccccccccccccccccccccccccfcffcccccccccccccccccccccccccfcffcccfffffcccccccccccfccccccffcbcccccccccffccfcccccfff
            ccccccccccccfccccccccfcccffcccccccccffffccccfffccccccccccccccccccccccccccffffcccccccccccccccccccccccccffcfcccfcffffccccccccccccccccccffcccccccccccfccccccccccff
            ccccccccffcccccccfccffccfccccccccccccffffcccccccccccccccccccccccfcccccccfffccccccccfffcccccccccccccfccfccfcccccfcffcccccccccccccccccccffccccccccfcccccfcccccfff
            cccccccccfffcccccfccffffcccccccccccccccfffccccccccccccfccccccfcffccccfcccffccfccccccffccccfcccccccccccccffcccccfccfcccccccccccccccccccfcccccccccffcccccccccffcc
            cccccccccffffccfcfcccfcccccccccccccccccffffcccccccccccfcccccfffffccccccccccccccccccccccfffccccccccccccccffccfccccffffcccccccccccccccfcfccccccccfffccccccccffccc
            ccccccccccfffccfcfcccfccccccccccccccccfffffccccccccccccccccfffcccccccccccccccccccccccfccffbcccccccccccfcfcccffcccfcffffcccccccccccccfcfccccccccfffccccccfffcccf
            cfcccccccccffffcfcccffcccccfccccccccccccfcfffcccccccccccccccfffcccccfcccccccccccccccccccfcccccccccccccfccccccccccccffffccccccccccccfffcccccccccfccfccffcccccccf
            ccccccccccffffffcccfffcccccccccccccccfcccfcfffcfccccccccccccffccfcccffccfccccccccccccccffcccccccccccccfccccccccfcfcfffcccccccccccccccccccccccccfcfffccccccccccc
            ccfcccccccfffffccffcfccfccccccccccfccccccfcffffcfccccccccccffcccccccccccfccccccccccccfffcccccccccccccccccccccccccfcfffcfcccccccccffffccbccfffccccfccccccccccccc
            cccfcccccccfffccfcccfccccccccccccccccccccfcfffcccccfcccccccccccccfccccccfccccccccccccffffccccccccccccccccccccccccfffffcfcccccccccffccfcccffccccccccccccccccffcc
            cccccccccccffffcfccffffcfccccccccccccccccfcfccfccccccccfccccccfccccfffcccccccccccccccffffcccccccccccccccccccccfccfcfcccfcccccccffcccccccccccccccccccccccccccccc
            cccccffccffcfffcfccffcfcccccccccccccfcccffcccfcccccccccccccccccccccfcfccccccccccccccccfcfcccccccccccccccccccccccfccccccffcccffccccccccccccfccccccccccccccccccff
            ccccccfffcccfcfcfccffcfcccccccccccccfcfccccfcccccccccccccccccccccccccffcccccccccccccccfffccfccccccccfcccccccccccfcccccccffcfcccccccccccccccfcccccccccccccccccff
            cccccfffccccfcccccfffcccccccccccccccccfcccfffcffcccccccccccccccccccfccffccccccfcccccccfffccfffffcccffcccccccccccccccccccfffcbccccccccccccccccccccccccccccccccff
            ccccffffccccfcffccfcccccccccccccccccfcccccfcccfccccccccccffcccccccccccfffcccccfcccccccfccccfffffccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccffc
            fcfcfffcccfcfcffccccfcfcccfccccccccffcccccccccccccfccccccfcfccccfccccfcffcccccccccccccfcccfcffffccccccccccccccccccccccccffbccccccccccccccccccccccccccccccccfffc
            ffccffcccccfffccfffcfcfccccccccccccfccccccccfcccccccccccccfffcccfcccfcccfffccccccccccccccccccfcffcfccbccccccccccccccffccfccccccccccfcccccccccccccccccccccccfffc
            cfccfccccccffffffffcffccccccccfcccfccccccccfcffccccfccfcccffcccfccccfcfffffcccccccccccccccccffccfffccccccccfcccccccccfffcccccccccccfccfccccccccccfcccccccccfffc
            cfcffcfcccccccffccfcffcccccccccccffcccfcccccccccccccccfcccfffccfcccffcffffcccccccccccccccfccccfccffcccccccccccccccccccffcbccccccccccccffccccccccfffcccccfccfffc
            cfcffcccccccccffccfffcfccffccccccffccccccfccccccccccfcfccffcfccccccfffcfffccccccccccccccccccccfcccfcccccccccccccccccffccbcccccccccccffcccccccccccffcccfcffcccfc
            fcccfccccccccffcccffffccccfccccccfffcccccccfccfcffccfccffcfcccccccffffcffcccccccccccccccccfcccccccfffccccccccccffcccfcccbcccccccccffccccccccccccccccccffffccffc
            ccfffcfcccccffccfffffccccccccfffcfffcccccccfccfcffcccccffccfcccccffcfcffcccccccccccccccccccfccccccfccfcccccccfffcfccccfcccccccccccfccccccccccccccccccccffccffff
            cffcfcfcccffffcccffccccfccccccfccfffcccccccccccccffcffffffccccccccccfffccfccccccccccccccccccffccccfccffcccccccfffcccccccccccccccccccffcccccfcccccccccccffcfffcf
            fffccffcccffcccffffccccccccfccfcccffcccccccfccccccffffcfffcfccccccccfffcccccccccccccccccccfccccccccccffcccccccffccccccffcccccccccccfccccfccfcccccccfcccffcccccc
            fffccffcccfcffcffcccccccfffcccfcfccfffccccccccccccffffccffcccccccfccffccccccccccccccccccccffccccccccccffcccfffccccccccfffcccccccccccfcccccccfccccccfccffcccccfc
            cfffffffcccffcffccccccccffcccccfcccfffcccccccccccffcffcffffccfcccccffccccccccccccccccccccffcccfcccccccfffccfccbcccccfccffccccccccccffcfccccccfccccccccccffccccf
            cfffcfffcccffffccccccccccccfccffcfffffccccccccccfffffccffffffcccffffccccccccccccccccccccfffccccccccccccfffccbcccccccffccfffccccccccffcfcccccccfcccccccccffccccf
            fffcccfffccffcccccccccccccffcffcffffffffccccccccffffffcfffffffccffffccccccccccccccccccccffcccccccccccccfffcccccccccffffccffccccccffffcfffcccccccccccccccffccccf
            fffcccffffffcccccccccccccfffffccffffffffcccccccccffffffffccfffffccfcccccccccccccccccfcfcfccccccccccccccffcccccccccccfffccffcccccfffffcfffcccccccccccccccfffccff
            fcfcfffcfffccccccccccfcccfffffcccfffffffccfcccfffccffffffccffffffffccccccccccccccccfcffccccccccccccccccffcccccceeecccffccffccccfffcccfffcfccccccfccccccccffccfc
            ccfffffcfcccfcccccccccccccfcffffffcffcfcccfcccfffccffffcccfcccfcfffccccccccccccccccfcffcccccccccccccfffffcbcccceeccccffcccfccccfffcccffccfcccccccccccccfcfffccc
            fccfffffcccfccccccccccccccfcfffffffffffcccfcffffffcfcfccfffccccccffccccccccffcccffccffffccccccccccfffffccccccccccccccffcccffcccfffcccffccfcccccccccccccfcfcfffc
            fcffffffccffcccccccccffcfffcffcfffcffffccfccccffcfffccffcffccccccffccccccccccccffcfffffccfccfccccffffccccccccccccccccffccfffccffcfcccfffffccccccccccccccfccccff
            fffffffccfccffccccccfffcccccffccffffcffccfcccfcfffffccffccfffcfccffccccfcccccccfccfcfccccfcccfcccffffccccccccccccccccfffffffffffcccccccfffccccccccccccccffcccff
            fffcfffffffcfcccccccffcccccccfccfffffffffffcfcffccfffffcccfffcffffffcccccfcccccfccffffcfffffffcfffffcccfccccccccccccfcfffffffffcffcccfffffccccccccfcccccccffccc
            ccccffcccffffffccfccccffccccffffffcccffffffffffccccccfffcfffffcfffccccccfccfffcccccffffffffffffcfcccfffccccfcfcccccccccccccffcffffffcccfcfffccccccccccccfcccccc
            cccccfcccccccffccfccccffccccffffffccccccccffffffcccccccfcfffffcfffccccccfccfffcccccffffffffffffcfcccffffcccfcfccccccccccccccfccccccccccfcccffcccccccccccfcccccc
            ffcccfccccccccccffccccfccccccfffffccccccccffccffcccccccccfffffcccccccccccccffffcccccfffffffcfffcccccffffcccfcfccccccccccccccfcccccccccccccccfcccfccccccccccccff
            cccccfcccccccfccffccccfcccccccfcfccccccccccfcccfcccccccccccccccccccccccccccffffcccccccccccccccccccccffffcccccffcccccccccccccfcccccfcccccccccffcccccccccccfccccc
            cccfcccccccccfcccffcccccccccccfcffcccccccccccccccccccccccccccccccccccccccccfcfffccccccccccccccccccccccccccfccfcccccccccccccccccccccccccffccccfffccccccccccfcfcc
            cccfcccccccccfcccffcccfccccccfcccfcfcccccccccccccccccccccccccccccccccccccccfcffcccccccccccccccccccccccccfffcffcccccccccccccccccccfcccccfcbcccfcffcccccccccffccc
            cccccccccccccccccffcccfccccccfcccccffccccccfccccccccccccccccccccccccccccccccfffccccccccccccccccccccfccccfcfcfccfccffccccccccccccccccccffcbcccccccccccccfcfccccc
            cccfccccccccccccffccfcfcccccccccccccfffccccccccccccccccccccccccccccccccccccfcffcccccccccccccccccccccccccfcffcccfffffcccccccccccfccccccffcbcccccccccffccfcccccff
            cccfccccccccccccffccfcfcccccccccccccfffccccccccccccccccccccccccccccccccccccfcffcccccccccccccccccccccccccfcffcccfffffcccccccccccfccccccffcbcccccccccffccfcccccff
            cccccccccccccfccccccccfcccffcccccccccffffccccfffccccccccccccccccccccccccccfffffccccccccccccccccccccccccffcfcccfcffffccccccccccccccccccffcccccccccccfccccccccccf
            cccccccccffcccccccfccffccfccccccccccccffffcccccccccccccccccccccccfcccccccfffccccccccfffcccccccccccccfccfccfcccccfcffcccccccccccccccccccffccccccccfcccccfcccccff
            ccccccccccfffcccccfccffffcccccccccccccccfffccccccccccccfccccccfcffccccfcccffccfccccccffccccfcccccccccccccffcccccfccfcccccccccccccccccccfcccccccccffcccccccccffc
            ccccccccccffffccfcfcccfcccccccccccccccccffffcccccccccccfcccccfffffccccccccccccccccccccccfffccccccccccccccffccfccccffffcccccccccccccccfcfccccccccfffccccccccffcc
            cccccccccccfffccfcfcccfccccccccccccccccfffffccccccccccccccccfffcccccccccccccccccccccccfccffbcccccccccccfcfcccffcccfcffffcccccccccccccfcfccccccccfffccccccfffccc
            `)
        tiles.setCurrentTilemap(tilemap`level2`)
        mySprite.setPosition(10, 24)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.enemy2)
    } else if (num == 3) {
        scene.setBackgroundImage(img`
            ffffffffffffccffcffffffffef22222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffcffffffffffffffffff
            ffffffffffffffceffffffffffff2222222222222222222222222222222222222222222ffffffffffffffffffffffffffffcfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffcfffffcecfffffffcccff222222222222222222222222222222222222222222222ffccfccfffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffcfffcfcfffffff2ffc2222222222222222222222222222222222222222222222222cfffffffffffffffffffcc2cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cffffffcfffffefffffffff222ff22222222222222222222222222222222222222222222222222fffffffffffcffffcc2222ccfffffffffffffffffffffffffffffffffffffffcfffffffffffffffff
            ffffffffccfffeffffffcef2cff22222222222222222222222222222222222222222222222222222fffffcfff2fffccc2222cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffcffcffffcfcffff2fecc222222222222222222222222222222222222222222222222222222222222222f2f2cccc2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff2ffefffffff22fffcfff222222222222222222222222222222222222222222222222222222222222222222222222cffcfffcfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff2cffcefffff2cffffffffff22222222222222222222222222222222222222222222222222222222222222222222ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffc222fffffffffcfffffffffcff2222f222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffcfffff22ffffcffccfffffffffcff222222222f22222222222222222222222222222222222222222222222222222222222ffffffffffffffffffcffffffffffffffffffffffffffffffffffffffff
            ffffffef2222fffffccfffffffcffff22222c22222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fccfffc222fffffffffffffffffcecf2222ff22ff2222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffcfff222cffffffffffffffccfefff2222222ff22222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            222fffffffffffcffffcfffeffffffc2222222fff22222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffff
            fccfffffffffffffffffffffeecf2222222fffcf222222222222222222222222222222222222222222222222222222222fffcffffffffcfccffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffcffffffffefff2222222222fff222222222222222222222222222222222222222222222222222222222fcffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffff
            fffefffffffffffffffeffeecceff2222f22ffcf2222222222222222222222222222222222222222222222222222222222fcffcffffffffffffffffffffffffffffffffffcffffffffffffcffffffff
            ffffffffffffcfcffcfffffffffffff22ffc2cfec222222222222222222222222222222222222222222222222222222222f2cffffffffffcffffffffffffffffffffffffffffcffffffffffffffffff
            cefffcfffffffcffccfffffcfffcfcf222ff2cfff22222222222222222222222222222222222222222222222222222222222fccffffffffccfffffffffffffffffffffffccfffffffffffffffffffff
            ffcf2ffffffffffffffffffffffcff22222222ff22222222222222222222222222222222222222222222222222222222222222cffffffffcccfffcfffffffffffffffffffffffffffffffffffffffff
            fcf222ffffffffffffffffffffc2fff22f22f2222222222222222222222222222222222222222222222222222222222222222ffcfffffccccfccffcffffffffffffffffcffffffcffffffffcfffffff
            ffcff222ccfcfffffffcffcfff2222222222222222222222222222222222222222222222222222222222222222222222222222feeffcfcecfcfffccffffffffffffffffffffffffffffffffffffffff
            cffecf22f22f22fffccffffcf2222222222222222222222222222222222222222222222222222222222222222222222222222cffcffffcccceecfffffffffffffffffffffffffffffffffffffffffff
            cefecef2ff222ffffffffffff222222222222ff2222222222222222222222222222222222222222222222222222222222222222c2222fc2cfcffffcffffffffffffffffffffffffffffffffffffffff
            ffff2ff2f22cffcfffffffffff22c22222222222222222222222222222222222222222222222222222222222222222222222242222ffcc2ffccffffffffffffffffffffffffffffffffffffffffffff
            cff22ff222fc22f2cfffffccffffff222222222222222222222222222222222222222222222222222222222222222222222224242fff222ffcfffffffffffffffffffffffffffffffffffffffffffff
            ccf22222222f222222ffcec2fcef222222222222222222222222222222222222222222222222222222222222222222222224dd4dd2222fcecffffffffffffffffffffffffefffffffffffffffffffff
            cff2f224222c222ff2c22f22ffff22222222222222222222222222222222222222222222222222222222222222222222222ddeed422422cecfffffffffffffffffffffffcfffccfffffffffffffffff
            fff222242222222fffcf222feffcffc22222222222222222222222222222222222222222222222222222222222222c22224ddb42222d4cfcfffffffffffffffffffffffffcffecfffffffffffffffff
            ffff2242f2222cffffffff2feff2fffff2222222222222222222222222222ff2222222222222222222fffffc222fffcf222bdb2d2444effeecfffffffffffffffffffffffffeecfffffffffffffffff
            feef2222f22c2fefeeffff22fff2f22f22f222222222222222222222222fffffffff22222222222222fccffcc22cffffc222bb2224eeefefcefffffffffffffffffffffffffcecfffffffffffffffff
            feff222f2f2222f24ecffff22222222222222222222222ff22cffff222ffffffeeeefffffcffcff22ffffffc22cccfffffc2222ffeee4ecffccefffffffffffffffffffffffffffffffffffffffffff
            cff22fc2222222222cfcfcf2ccff22222222222222fffffffffffffffffffeeeefffffffffffffffffffffffccccffffffffc22ffee44eccffcffffffffffffffffffffffffcffffffcffffffffffff
            fff2fef2c22fffff22fffff2fffc2222222222222222ffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffff444eefecfffffffffffffffffffffffffffffffffeffcffffffff
            ffcfff222222cc22222ffff222222222222222222222ffffffffffffcfffffffffffffffffffffffffffffffcffffffcffffffffffffe4efffffffffffffffffffffffffffffcfccfffffeffcffffff
            efccff242222cfffcfffffc22ff2f22222222222ff22ffffffffeffffffefffffffffffffffffffffffffffeffffffffffffffffffffcecffffffcffffffffffffcfffffffffffccfcccffc222cccff
            cfcf2f2f2242ccffffffffc222ff2222222222fffffffcfffffeeeeeffccfffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffccffffffff222c2222224222222ff
            fff222222242222f22cffff22222222222222cfffffffffffffcffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffcc2222222244222222ff
            cef2f222222222222cffcecf2f2f222222222ccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffff22224d224dd2222fff
            2ff222c22222222d42ffcf2ff2222222222222fcfffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfeefffcfffffff22244422222222fff
            22fff2222f22222222f2222f2222222222222ff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffeeeeffffffffc222224d422242222cff
            22ff2ff222222222222222f2f2222ff222f222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffefeeefffffffff2244ddd444422222fff
            22fc2222222222d222222222f2f222222222222222ffffffffffffffffffffffffffffffffffffffffffffffceffffffcfffffffffffffffffffffffccffffffeeeffffffccfc22dbbd44e422222fff
            222222222224242222f222ff22222222222222222ffffffcfffffffffffffffffffffffffffffffffffffffffffeffffffffffefffffffffffffffffffffffffffffffffc2c2222bbdd4e4422222fff
            2cf22222222442222222222ff22222242222222fffffffffffffffffffffffffffffffffffffffffffffcefffffffffcfffffffeefffffffefffcfffffffffffffffffffc2224222bd7e4dd22222cff
            42222222222224b22222222ff2222222222222ffffffffffffffffffffffffffffffffffffffffffceeecffffffffffffffefffefffffffffecfefffffffffffffffffffc224dd222224dd4222222ff
            2222f2222222222222ff2422222222222222222ffffffffffffffffffffffffffffffffffffffffe4e4effeffffffffffffffffffffffffffefffffffffffffffcfffffff2247d22222bdd42222222f
            cc22222222222bd2222f22222222222222222242fffffffcffffffffffffffffffffffffffee4244b4effeefffffffffffef22222fffcffffffffcffffffffffcccffffff2224d22222dd4422222222
            22222222224222d24422222222222222222222222fffffffcffffffffffffffffffffffffffe422222ffffeeeffeffeefe2422222ffffefffffffcfffffffffffffffffffc244d22224444442222244
            c222422f244d444ddd42222422222222222222f22ffff2fffcfffffffffffffffffffffffffc2ff22fffffeeffffeeffee4222222feefffffffffffcffffffffffcffffffff24d22244444442222224
            2222422224e4dd4edd4242f222222222222222f222ffc2cfffffccffffffffffffffffffffff2422fffffc4feeeeeeee22ff222fffffffffffffffffffffffffffffffffff222242244444242222222
            2224422f44444dd4444d44222222222222222222222ff2ffffffefffcfffffffffffffffffef222fffffffefeefffffeeeffc2ffffffffffceeecffffffffffffffffff22222222242444422222f222
            2224422244444e4eeed424222222442222222222222222fcffffffffecfffefffffffffffff442fffffeeefffffffffeffffffffffffffffeffeffffccfeffffffffffff22222224222d4422fff2222
            2c4eb2f224e4444e4e422222222244442222222222ff22fcfffffffccffffccfffffffffffffffffffeeefffffffffeffffffffffffffeefcffeefffeffffffffffcfffff22222422224222cfff2422
            fffffff22444e44444222222222222222222222222ffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee2e2eeeeeefffffffffffffff222242222222ffceebeff
            cfffff2222dd444dee422222222222224222222422fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe42e42e22effffffffffffffef242222bd22ffffffefff
            fffff222224d42244d4222222222222224d4422422fffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffceee4424eeeeeffffffffffff44422444d4222deeccfff
            22f2222f224e4224442db2224222222224edd222222fffffffffffffffffffffffffffffffffee2eeefffffffffffffffffffffefffffffffffffe44efeeeeeffffffffff22bd224ee42222444fcfff
            22222222222442222224d222224222d424ddd222242ffffffffffffffffffffffffffffffeee22224eefffffffffffffffffe2e42effffffffffffeeeffeeeeeeeffeefff2222224444442244ecceff
            222222222244222222224222222222444ed422222222fffffffffffffffffffffffffffffe22444244efffffffffffffffeeee2ee4efffffffffeeefeeeefeeeeeffffeff2222222222222224e4efff
            222222222442222222224222222222244d42222222222fffffffffffffffffffffffffeee2444444442efffffffffffffee2e4e4e42ecfffffeee24efffeeeeeeeefffffff2fffffffff22ffeee4fff
            2222222222d422222224222224442224e444442222222ffffffffffffffffffffffffee4444dee4422e22eeeefffffffffe444444e4effffffffeefeeeefeeeee44fffffffffffffffff22fffffefff
            222222222242222224422222224422424442224222222fffffffffcccfffffffffffeee44e4eee44eee244e422effffffe44444e4eeeeffffffffefe4efeee22fffefffffffffffffffffffffffffff
            2222222222224222444222224222222224422224424222ffffffffcffffffffffffee444eeee444d224e4d444efceffffe4444eeee44effffffffffffffff22ee2effffffffffffffffffffffffffff
            2222222222224442244222244224222224422244444222ffffffccfffffffffff224444eeee4eee4e42444deefffe442ffeeeefe44eeeefffffffffffffeee44eeeeeffffffffffffffffffffffffff
            222222222224444444442224422244442222422222222222ffc2222ffffffffff2222d4ee444e224e44444ee2effe2244e2eefffe2feeefffffffffffffffe4de444ffffffffeffffffffffffffffff
            222222224222442247d4422444244dd4d422422222222222ff22224ffffffffff222224e44d4eeeeee444ee22222ee44ee4eeeefffffefffffffffffffffffed74deefffffeeeffffffffffffffffff
            22222222224222224ddd42444444eed4ee444244222222222222222ffffffffc222222244422f44ee4e4eee2ee2222422eeee42effffffffcfefffffffffeeee4e74eefffe2e2efffffffffffffffff
            22224422224244224dd4e4dde444eeeee4422242222222222fff2fffffffff2222222222222fffeeeeeeeffe444222222ee4efe2efffffeeffffffffffffe2e4e4deeefffeef2efffffffffffffffff
            222244422244bdd44444ddddeb44e774d22224442222222222ffffffffff222222222222ffffff44e42efffeee22242e2eee2ee2efffffffffffffffffffeeeeeed4eefffeeefffffffffffffffffff
            2222444224e4d4e4444447ddddeee7d4422222d22222422222ffffff22222222222222fffffffe4eee42eefffff4e2ffefffeefefefffffffffffffcfefee4eeee4deefffeeeeffffffffffffffffff
            2242444224edd4e4d7d4ddddd4eee4d72224444222222222222fffff2242222222222fffffffffeefffeeffffffeeeefffffeeeeeeef2efffffffeeffeffee44eeeeeefffeeeeffffffffffffffffff
            44442242224dd44ddde4dddddbeee74e42277444222244222222fff24424222222242ffffffffffffffffffffffe44effffffe44efffefffefffffffffffeeddd4ee4eeee2efeffffffffffffffffff
            4224222222244e444ee447d444be4de4444ddd2222222442222222222222222444442fffffffefffffffffefffeed4eeffffffffffffffffffffffeeeeeee44ddbd4e2efeeeffffffffffffffffffff
            2222222222222422444447d774de4444444dd4222222244222442222222224ed22242fffffffffffffffeeeffff3efe222fffffeeefffffffffffe24224eee7bdbd4e24eeeeefffffffffffffffffff
            4242444422444442222444d7ddde4e4dddddd422222222222222222222222442222222fffffffffffffeee4eefeee22eeeefffe244ef2fffffffe4224444e47ddbdbee2eeffffffffffffffffffffff
            22444444224444422222447eddbeeee4dddd442242222224224422222224442ffff242fffffffffffffffffffe2ffe22ee2feefeee222222fff24e4222d4e44ddddbee2eeefefffffffffffffffffff
            224d444422244424422224d47dd444e7ddd42244e4222222243442222224222ffff24422fffefffefeeffffffffffe4ee44eeeffe242222ffff22442242d44ddddddbe22e4effffffffffffffffffff
            2224444422444222222222747ddd74ddddd42222422222242242222422222f22fff224e4eeeeeeffffffffffffffffeee4e2e2fe422d422222222222222444bddd7bd4eeeefffffffffffffffffffff
            4224444222242224224224d47bdddddddd422222222224244444424422fffffffff224eee4efffffffffffffffffffefe4e42222324ee224224422424422277ddddbd4eee2ee4efffffffffffffffff
            2222224442242222224d44d47dddd7dddd4222d22222222244d422422fffeefffff244eefeef222fffff224efffeeeeee244442222444222f2244d742222244eddbeebeee42feefffffffffffffffff
            f22f224e4424424222244dde4dddd7dd742222d22224222222472242fffe4effffffee4efffffffffe42222fffee2442ee44e42244e222422f22db72244222244ddbdebee22ffffffffffffffffffff
            c22f2244442444222224bdde4dddddd7422222d4222242222242222ffffe4effffffeeefffffc222fee2222fffeeee44eeefeed22ee42224222222d44d44222222477be74e22effffffffffffffffff
            22222c22242442224444474e4dddddd44222222422442222222222fffffeeeeffffffffffffff224fe22222fffee2eeeeeeee42244422424444222bd7dde422222222b72bbe22effeffffffffffffff
            2222222244222222444ddd4e4bdddddd422222244222222224222ffffffffffffffffffeffff22442eee44fffffeeeeeffffff24442222244442222247d4e42f222222722bde222eeefffffffffffff
            2222224224242222d777d74e4bddb422222222222222222222242fffffffffeffffffffeff22244ee4eeeeffffffffeffeff222444224ff24432f22444dd4422222227e722bee2eeeefffffffffffff
            22224444442422224e74444e4bddd7442222222422222222222222fffffee242eeffeefef22222fffeeffffffffffffffefff2222222222222242244224e442222f247772424b4eeeffffffffffffff
            222222d44424422244de444e4bddddd44422224e42222222222222fff22ee4422e4e2eeee24222ffffffffffffffffffffff222222222222442f224222244e4422242222222fe44defeffffffffffff
            2224dd4444224224e4d744444ddddddb4224dde44222222222222222f22e4ee44e44444e2eff22fffffffffffffffffffff2222244422222222222222224ed222222222fff2ffff4eeeffffffffffff
            2f2222224424224dd47444444bdddddd7427dd44222222222222224422244efe2ee4ee4eefffffffffffffffffffffffffe242424d44222224422fff222244242ff2fffffffffffe4ee2effffffffff
            2cff22222422222dd4e4e4e44bdddddddd2ddb222222242222222224244deeefe4eee44eefffffffffffffffffffffffeee222e4e47d4244222222ef2422422d2fffffffefffffff44d4effefffffff
            ffff222224224444e4e444444bdddddddd7ddb2222d4222422222222244d4eeeeee444deffffffffffffffffffffffffe224244dd4eddd4424d24422224d422222ffffffffffefffefe22efffffffff
            fffffc222222444de47e44e44ddddddddddde4224224222224422222444d44eee2eeeeeefffffeeffffffffffffffffe222e2eeedd4edde4442244222d442222ffffffffeefeffffefceeffffffffff
            ffffff222242444444d44e444dddddddddd4ed42444422224d222242222444eee44422eefffeeeeeeffffffffffffeeee2e2eeee4eee4e4444d444422b4442ffffffffffffffefffffffffcffffffff
            fffffcc222224444444e44447dddddddddb4bbd77222224d4b2422224d44ebe44ddde42eeffeeefffffffffffffee2ee244eee4bb4e4eee444eed422224e22fffffffffffffffffffffffffffffffff
            ffffffc22222444444e444e7ddddddddbbd7dbdddd222222224422224dbd4b4e4eeed44eeeeeeeefeffffffffeee222444d44eeddde4ee4eee4e4222222422fffffffffffffffffffffffffffffffff
            fffffff22222444444444477dddddddddddbbebddb22222d424222422ddd4ddde4e474de444e42422effffeeefffee44e4ddddddb4eeeeee4e4e42222222222feffffffffffffffffffffffffffffff
            fffffff2222244222444444ddddddddbebddb7ddb2224242222222242be4ebbbee4eee444e44dd4e22ee22224efee4d4e4dbdb4d4d44e44eee4ee4d2442fee2eeffffffffffffffffffffffffffffff
            fffffff222222222244474d7dddddddbeebddddbb2224dd4b222222244444ed74eeee4eeeee44ddd4e222222eeeeeeddee4eedddeeee4eefff2edb22beffffe4ee4efffffffffffffffffffffffffff
            ffffffc22222222224444477ddddddd7eeddddbbd44224ee44d222222227dd4deeee4eee24444ddee4eee42eeeeeebd44eeeebb44eeee4efff2ebdd44effff42effffffffffffffffffffffffffffff
            ffffffc222222242244e4447ddddddd7774ddddbbe74dd4beeb422224224db7deee44e4ee222eedeee4e444eeeeeeee44eee4dd44444eeeffffeeeb4eeffffffeffffffffffffffffffffffffffffff
            fffffffc22222244444ee444bdddddb7ddebdddeeebeeebdbeee44222244d44d4eed4eefeee2e4e4ee4444de222ee4de44dedddd4eed4eeeeeeeee44effffffffffffffffffffffffffffffffffffff
            fffffffc222244444444e47ddddddbebddbeddbeeebdbeedddee4224424dde4ed44deeefffee444e4444ddd4d4edddd7d4d4bd4ee4444eee42e444e4effffffffffffffffffffffffffffffffffffff
            fffffff222422444444447dddddddbddddbbddd74bddd7ddb4dd444222d444eee4ddeeefe222d444d444ddbddedd44d444e4bde2e2e22eee42edbee42ffffffffffffffffffffffffffffffffffffff
            fffffffc22444444444444dddddddddbebeddd742bdddddddee422224d4eeeee4dddeeeee42ee4dd4444eebde44e4e4ed4eed42ee4eeeff2e4eeb42eeefffffffffffffffffffffffffffffffffffff
            fffffffc222224444444444744dddddee74eeb7d24bdb2224444222222dd44de444d4e24eeeee4ddeeeee4e4d44e44e444e4e2ee444e2e4eeee444efeefffffffffffffffffffffffffffffffffffff
            fffffffc22222222444444447dddbbbbd44e4444224b22222222222222474e4d4ee44dee4eee2eed4eeee4eee22e2eee44e44ee4444e4eeee2edd74effefffeefffffffffffffffffffffffffffffff
            fffffffc222224222444e444444ebd22422d444222222222242222224444444dd44e4e44ee444e4d4444db44eeef244ee4eee4ee4dd4e44eeeedb4e2ee4efe422efffffffffffffffffffffffffffff
            ffffffff22222222224e444422444222222244222222222224422422422244e4444eeeed444444de44eddd4eeffe424ee22e22eeebdd4ed4eebd4e22ff44e2222efffffffffffffffffffffffffffff
            fffffffcc2222224444444442224442222242242222222224d4222222222224ee444ee4dd4444e44ee4e4444effe2ee4ee242effeeee2eeeeeeee422ee22e222effffffffffffffffffffffffffffff
            ffffffffc222444e44eeeee422224422222222422222222d4b42242442ffffe2444e44e444edeeeeeed4e4eefffe4224eff22efffee222ee22e42eefe2e4e442effffffffffffffffffffffffffffff
            fffffffcc2444444444e44422224442222244222222222244222224e222ffffe224eeffe22e4ddeffe3e4d4effee224eeffffffffffe2efeeffeeeeeff42eeeeefffeffffffffffffffffffffffffff
            ffffffff222244442244442222222222442222222222224222222fe222ffffffe2efffffee244eeffffe442effee42224efffefffffeeefefffffffeffe2eeeffffeecfffffffffffffffffffffffff
            ffffffff22222222222244422222222222222222224222222222ffffe2ffffffeffffffffffffffffff22222ee44e42222ffffffffffffeefffffffffffeffffffffffcffffffffffffffffffffffff
            ffffff22222222222222242222222222222222222f2222222222ffffe2effffeeffffffeef22eeffffeeee244ee422eeeeffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffc2222222222222222222222222222222222222ff2fff2222fffff22eefe22effffffe222222effffffff242fe2efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fff222222222222222222222222222222222222222ffffff22fffffeeeee2ffeeffffff4ee2222effffffffeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f22222222222224442222222222222222222222222fffffffffffffeeffefffffffffffeffe222effe2ffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f2222222222fccfee42222f22222222222222222222ffffffffffffffff4ffffffffffffffffeffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        tiles.setCurrentTilemap(tilemap`level3`)
        mySprite.setPosition(73, 7)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    } else if (num == 4) {
        tiles.setCurrentTilemap(tilemap`level4`)
        mySprite.setPosition(73, 7)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.dangerousItems, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 200)
    myDart.destroy(effects.disintegrate, 200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    nextLevel(2)
})
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    if (canDie == 1) {
        info.changeLifeBy(-1)
        canDie = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vDarts == 150) {
        mySprite.setImage(assets.image`Main character4`)
    } else if (vDarts == -150) {
        mySprite.setImage(assets.image`Main character7`)
    }
    isDown = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    myDart.destroy(effects.disintegrate, 20)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    myDart.destroy(effects.disintegrate, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile65`)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile61`, function (sprite, location) {
    animation.runImageAnimation(
    sprite,
    assets.animation`myAnim17`,
    150,
    true
    )
    sprite.setVelocity(randint(80, 40), 0)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    myDart.destroy(effects.disintegrate, 20)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile62`, function (sprite, location) {
    animation.runImageAnimation(
    sprite,
    assets.animation`myAnim18`,
    150,
    true
    )
    sprite.setVelocity(randint(-80, -40), 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    nextLevel(3)
})
let stone: Sprite = null
let tree: Sprite = null
let snake: Sprite = null
let canDie = 0
let delaySuriken = 0
let vDarts = 0
let delaySword = 0
let isDown = 0
let sworf: Sprite = null
let myDart: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Main character`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
nextLevel(1)
mySprite.ay = 650
myDart = sprites.create(assets.image`myImage0`, SpriteKind.Projectile)
sworf = sprites.create(assets.image`myImage0`, SpriteKind.Projectile)
info.setLife(1000)
game.onUpdate(function () {
    if (vDarts == 150) {
        sworf.left = mySprite.right
        sworf.y = mySprite.y
    } else if (vDarts == -150) {
        sworf.right = mySprite.right
        sworf.y = mySprite.y
    }
})
game.onUpdate(function () {
    mySprite.ay = 650
})
game.onUpdateInterval(5000, function () {
    for (let value2 of tiles.getTilesByType(assets.tile`myTile68`)) {
        stone = sprites.create(assets.image`myImage1`, SpriteKind.dangerousItems)
        tiles.placeOnTile(stone, value2)
        stone.setVelocity(0, 150)
    }
})
game.onUpdateInterval(700, function () {
    delaySword = 100
})
game.onUpdateInterval(2000, function () {
    delaySuriken = 100
})
game.onUpdate(function () {
    if (mySprite.vy < 0 && isDown == 0) {
        mySprite.setImage(assets.image`Main character2`)
    } else if (mySprite.vy > 0 && isDown == 0) {
        mySprite.setImage(assets.image`Main character3`)
    } else if (mySprite.vx == 0 && isDown == 0) {
        mySprite.setImage(assets.image`Main character`)
    }
    if (vDarts == -150) {
        if (mySprite.vy < 0 && isDown == 0) {
            mySprite.setImage(assets.image`Main character5`)
        } else if (mySprite.vy > 0 && isDown == 0) {
            mySprite.setImage(assets.image`Main character6`)
        } else if (mySprite.vx == 0 && isDown == 0) {
            mySprite.setImage(assets.image`Main character1`)
        }
    }
})
game.onUpdateInterval(500, function () {
    canDie = 1
})
