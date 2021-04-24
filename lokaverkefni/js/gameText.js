const texts =`{ 
    "text": [
        {
            "id": 0,
            "title": "THE MYSTERIOUS CAVE",
            "text": "You wake up in a cave surrounded by eggs of an unknown creature. <br><br> A growl echoes and gets closer to you every second, you see a sword on your left side and an exit on the right.",
            "options": {
                "Go left (take the sword)": 1,
                "Go right (exit the cave)": 2
            }
        },
        {
            "id": 1,
            "title": "THE SWORD",
            "text": "You pick up the sword making a loud sound. The footsteps of the creature gets louder and closer... <br><br> You look for a hiding spot. <br><br> As you scan the cave, you see a hole covered by stone slabs that leads in to the ground, and a big rock.",
            "options": {
                "Hide in the ground": 3,
                "Stand still and hope for the best": 4,
                "Hide behind the big rock": 5
            }
        },
        {
            "id": 2,
            "title": "THE ESCAPE",
            "text": "The creature sees you as you try to exit the cave. <br><br> You died."
        },
        {
            "id": 3,
            "title": "THE DANGEROUS WAIT",
            "text": "You get into the ground and put the slab over. <br><br> As the creature gets closer it steps on top of the slab, snapping it in half. The creature sees you and kills you. <br><br> You died."
        },
        {
            "id": 4,
            "title": "THE LONG WAIT",
            "text": "You try to stand as still as possible. <br><br> As the creature scans the room for other beings you start sweating profusely.",
            "options": {
                "Run for the exit": 6,
                "Scream for help": 7,
                "Keep standing still": 8
            }
        },
        {
            "id": 5,
            "title": "THE WAIT",
            "text": "The creature scans the room. <br><br> You close your eyes, hoping for the best. <br><br> You hear the creature getting closer. After some time, you hear the creature exit the cave.",
            "options": {
                "Check if the creature is still there": 8,
                "Keep hiding": 9
            }
        },
        {
            "id": 6,
            "title": "THE ESCAPE",
            "text": "The creature sees you going for the exit, catching you and kills you. <br><br> You died."
        },
        {
            "id": 7,
            "title": "THE SCREAM",
            "text": "The creature stares at you as you scream and eats you. <br><br> You died."
        },
        {
            "id": 8,
            "title": "THE UNKNOWN PERSON",
            "text": "As you check if the creature is still there, you hear screaming from the distance.",
            "options": {
                "Check on the screaming": 10,
                "Ignore the screaming": 11
            }
        },
        {
            "id": 9,
            "title": "THE WAIT",
            "text": "You stay behind the rock, but the creature comes back, making it impossible for you to leave. <br><br> After some time you start to get hungry. <br><br> Your stomach starts grolwing, making the creature aware of your presence. <br><br> You died."
        },
        {
            "id": 10,
            "title": "THE FEAST",
            "text": "You go and check on the screaming. <br><br> You see the creature ready to start eating the screaming person.",
            "options": {
                "Kill the creature with your sword": 12,
                "Run away": 13
            }
        },
        {
            "id": 11,
            "title": "THE EXIT",
            "text": "As you wander around, you see an exit.",
            "options": {
                "Go for it": 14,
                "Look for another exit": 13
            }
        },
        {
            "id": 12,
            "title": "THE ATTACK",
            "text": "You try and do some damage to the creature, but the mere size of it makes all your attacks ineffective. <br><br> The creature picks you up and puts you next to the other person. <br><br> You died."
        },
        {
            "id": 13,
            "title": "THE ALMIGHTY EXPLORATION",
            "text": "You wander around the cave for some time, <br><br> After some hours you give up on finding exits. The creature slowly approaches you and kills you. <br><br> You died."
        },
        {
            "id": 14,
            "title": "THE GREAT ESCAPE",
            "text": "You successfully escape the cave and go look for help.",
            "options": {
                "Go to the nearest town": 15,
                "Go to your house, situated nearby": 16
            }
        },
        {
            "id": 15,
            "title": "THE TOWN",
            "text": "As you walk into town, you see all the townsfolk staring at you.",
            "options": {
                "Ignore them": 17,
                "Talk to them": 18
            }
        },
        {  
            "id": 16,
            "title": "HOME SWEET HOME",
            "text": "As you approach your house, you hear a growl... <br><br> You realise that it's the same one from the cave you just escaped from. <br><br> You enter the house carefully, making sure to check all crooks and crannies. <br><br> Everything seems clear, so you go rest for a bit. <br><br> As you lay down, you see the creature hanging from the ceiling.",
            "options": {
                "Scream for help": 19,
                "Give up": 20,
                "Run to the nearest town": 15
            }
        },
        {
            "id": 17,
            "title": "THE JAIL CELL",
            "text": "You ignore the townsfolk and get arrested for being ignorant."
        },
        {
            "id": 18,
            "title": "THE TOWNSFOLK",
            "text": "You ask the townsfolk why they are acting so serious. <br><br> The townsfolk tell you about the curse laid upon all living things that come close or in contact with the creature and if a town is entered the whole town gets cursed. <br><br> They then tell you that the only way to get rid of the curse is to kill the creature or be killed.",
            "options": {
                "Fight the creature": 21,
                "Argue with the townsfolk": 22
            }
        },
        {
            "id": 19,
            "title": "SCREAM",
            "text": "You scream your lungs out, but no one can hear you. <br><br> You died."
        },
        {
            "id": 20,
            "title": "GIVE UP",
            "text": "You realise that nothing can be done to escape this creature, so you decide to give up. <br><br> You died."
        },
        {
            "id": 21,
            "title": "THE FIGHT",
            "text": "You return to the cave to fight the creature. <br><br> As you approach the known habitat of the creature, you see it fast asleep.",
            "options": {
                "Approach it slowly": 23,
                "Run at it": 24
            }
        },
        {
            "id": 22,
            "title": "THE DEBATE",
            "text": "You argue with the townsfolk. <br><br> You see the townsfolk return to their houses.",
            "options": {
                "Run away": 25,
                "Wait": 26
            }
        },
        {
            "id": 23,
            "title": "THE APPROACH",
            "text": "You slowly approach the creature. <br><br> As you approach it you kick a pebble with your little toe, waking up the creature.",
            "options": {
                "Attack it": 27,
                "Run away": 28
            }
        },
        {
            "id": 24,
            "title": "ENGARDE!",
            "text": "You run at the creature and successfully slice off it's head."
        },
        {
            "id": 25,
            "title": "RUN AWAY",
            "text": "You run away and are never seen again."
        },
        {
            "id": 26,
            "title": "THE WAIT",
            "text": "You wait for the townsfolk. <br><br> A couple of minutes pass and suddenly the townsfolk exit their houses armed with weapons.",
            "options": {
                "Fight them": 29,
                "Make a deal with them": 30
            }
        },
        {
            "id": 27,
            "title": "THE ATTACK",
            "text": "You run at the creature, but your attacks are unsuccessful. <br><br> You died."
        },
        {
            "id": 28,
            "title": "THE RUN",
            "text": "You run away, returning to the town where you are beheaded for not completing the task assigned to you. <br><br> You died."
        },
        {
            "id": 29,
            "title": "THE FIGHT",
            "text": "You use all of your power to try and fight off the townsfolk, in the end all of your energy was depleated and you got arrested. <br><br> Shortly after it is decided to behead you. <br><br> You died."
        },
        {
            "id": 30,
            "title": "THE DEAL",
            "text": "You make a deal with the townsfolk. <br><br> You give them all of your wealth and belongings and make yourself disappear. <br><br> You died."
        }
    ]
}`;

export { texts as default };