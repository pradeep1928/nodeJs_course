const event = {
  name: "Birthday party",
  guestList: ["pradeep", "riya", "dugu", "giri"],
  printGuestList() {
    console.log("Guest List for: " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();

const task = {
  task: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "film course",
      completed: false,
    },
  ],
  getTaskToDo() {
     return this.task.filter(task => task.completed === false)
  }
};


console.log(task.getTaskToDo())