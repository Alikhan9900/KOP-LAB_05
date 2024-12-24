import { makeAutoObservable } from "mobx";

class TaskStore {
    tasks = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTask(task) {
        this.tasks.push({ id: Date.now(), text: task, completed: false });
    }

    toggleTask(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) task.completed = !task.completed;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter((t) => t.id !== id);
    }
}

export const taskStore = new TaskStore();
