
const event = {
    name: 'Birthday party',
    guestList: ['pradeep', 'riya', 'dugu', 'giri'],
    printGuestList() {
        console.log('Guest List for: ' + this.name);

        this.guestList.forEach(guest => {
            console.log(guest + " is attending " + this.name);
        });
    }
}

event.printGuestList()