const texts =`{ 
    "text": [
        {
            "id": 0,
            "text": "You wake up in a dungeon surrounded by eggs of an unknown creature. <br><br> A growl echoes and gets closer to you every second, you see a sword on your left side and an exit on the right.",
            "options": {
                "Go left (take the sword)": 1,
                "Go right (exit the cave)": 2
            }
        },
        {
            "id": 1,
            "text": "You pick up the sword making a loud sound. The footsteps of the creature gets louder and closer... <br><br> You look for a hiding spot. <br><br> As you scan the cave, you see a hole covered by stone slabs that leads in to the ground, and a big rock.",
            "options": {
                "Hide in the ground": 3,
                "Stand still and hope for the best": 4,
                "Hide behind the big rock": 5
            }
        },
        {
            "id": 2,
            "text": "The creature sees you as you try to exit the cave. <br><br> You died."
        },
        {
            "id": 3,
            "text": "You get into the ground and put the slab over. <br><br> As the creature gets closer it steps on top of the slab, snapping it in half. The creature sees you and kills you. <br><br> You died."
        },
        {
            "id": 4,
            "text": "You try to stand as still as possible. <br><br> As the creature scans the room for other beings you start sweating profusely.",
            "options": {
                "Run for the exit": 6,
                "Scream for help": 7,
                "Keep standing still": 8
            }
        },
        {
            "id": 5,
            "text": "The creature scans the room. <br><br> You close your eyes hoping for the best. <br><br> You hear the creature getting closer. After some time, you hear the creature exit the cave.",
            "options": {
                "Check if the creature is still there": 8,
                "Keep hiding": 9
            }
        },
        {
            "id": 6,
            "text": "The creature sees you going for the exit, catching you and kills you. <br><br> You died."
        },
        {
            "id": 7,
            "text": "The creature stares at you as you scream and eats you. <br><br> You died."
        },
        {
            "id": 8,
            "text": "As you check if the creature is still there, you hear screaming from the distance.",
            "options": {
                "Check on the screaming": 10,
                "Ignore the screaming": 11
            }
        },
        {
            "id": 9,
            "text": "You stay behind the rock, but the creature comes back, making it impossible for you to leave. <br><br> After some time you start to get hungry. Your stomach starts grolwing, makin the creature aware of your presemce. <br><br> You died."
        },
        {
            "id": 10,
            "text": "You go and check on the screaming. <br><br> You see the creature ready to start eating the screaming person.",
            "options": {
                "Kill the creature with your sword": 12,
                "Run away": 13
            }
        },
        {
            "id": 11,
            "text": "As you wander around, you see an exit.",
            "options": {
                "Go for it": 14,
                "Look for another exit": 13
            }
        },
        {
            "id": 12,
            "text": "You try and do some damage to the creature, but the mere size of it makes all your attacks ineffective. <br><br> The creature picks you up and puts you next to the other person. <br><br> You died."
        },
        {
            "id": 13,
            "text": "You wander around the cave for some time, <br><br> After some hours you give up on finding exits. The creature slowly approaches you and kills you. <br><br> You died."
        },
        {
            "id": 14,
            "text": "You successfully escape the cave and go look for help."
        }
    ]
}`;

export { texts as default };