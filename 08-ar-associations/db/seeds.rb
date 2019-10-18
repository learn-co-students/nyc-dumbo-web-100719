
Ghost.destroy_all
HauntedHouse.destroy_all
Haunt.destroy_all


casper = Ghost.create(name: "Casper")
moaning_myrtle = Ghost.create(name: "Moaning Myrtle")
princess_of_ravenclaw = Ghost.create(name: "Princess of Ravenclaw")

hogwarts = HauntedHouse.create(name: "Hogwarts", address: "22 Pemberton Place")
amityville_house = HauntedHouse.create(name: "Amityville Horror House", address: "22 Main St; Amityville, NY")

# Haunt.create(ghost: casper, haunted_house: hogwarts)

Haunt.create(ghost_id: casper.id, haunted_house_id: hogwarts.id)
Haunt.create(ghost_id: casper.id, haunted_house_id: amityville_house.id)

Haunt.create(ghost_id: moaning_myrtle.id, haunted_house_id: hogwarts.id)
Haunt.create(ghost_id: princess_of_ravenclaw.id, haunted_house_id: hogwarts.id)



