import { task } from './task';
import { workValues } from './workValues';

export const fullListOfTasks : task[] = [
    {action : 'preparer repas noel', done: true },
    {action : 'ammener chocobons au boulot', done: false },
    {action : 'faire une blague a Harrold', done: true },
    {action : 'déranger le bureau de Thomas', done: true },
    {action : 'appeler Walid Chocoboy', done: true },
    {action : 'assister a la Fete des lumieres a Gaillac', done: false }
]
export const fullWorkValues : workValues = {TasksDone: 0, TasksUndone :0}
