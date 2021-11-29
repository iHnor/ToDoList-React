import React from "react";

function formatDate(deadline) {
    if (deadline) {
        let date = deadline.split('-');
        return `${date[2]}.${date[1]}`;
    }
    else {
        return deadline;
    }
}

function isExpired(date) {
    return new Date(date).setHours(23, 59, 59) < new Date();
}


// BEM block-name
// BEM block-name__element-name
// BEM block-name__element-name BEM block-name__element-name_modifier
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={task.done ? "done-task task" : "task"} id="1" >
            <div className="header-of-task"> {/*just header */}
                <input type='checkbox' checked={task.done ? "checked" : ""} onChange={() => onToggle(task)} />
                <h2>{task.title}</h2>
                <h3 className={(isExpired(task.deadline) && !task.done) ? "expired-date" : ""}>{formatDate(task.deadline)}</h3>
            </div>
            <div className="description-delete">
                <p>{task.description}</p>
                <button onClick={() => onDelete(task)}>X</button>
            </div>
        </div>
    )
}


// BEM block-name
// BEM block-name__element-name
// BEM block-name__element-name BEM block-name__element-name_modifier
// const TaskBEM = ({ task, onDelete, onToggle }) => {

//     const {block: taskBlock, element} = useBem('Task');
//     const {done} = task;
//     return (
//         <div className={taskBlock.modifier({done})} id="1" >
//             <div className={element('title')}>
//                 <input type='checkbox' checked={task.done ? "checked" : ""} onChange={() => onToggle(task)} />
//                 <h2>{task.title}</h2>
//                 <h3 className={element('deadline').modifier({expired: isExpired(task.deadline) && !task.done})}>{formatDate(task.deadline)}</h3>
//             </div>
//             <div className={element('footer')}>
//                 <p>{task.description}</p>
//                 <button onClick={() => onDelete(task)}>X</button>
//             </div>
//         </div>
//     )
// }

// function useBem(blockName) {
//     return useMemo(() => {
//         let block = new BemBlock(blockName);
//         return {
//             block: block,
//             element: name => block.element(name)
//         };
//     }, [blockName])
// }

// class BemNode {
//     modifier(flags) {
//         return new BoolModifier(this, flags);
//     }
// }

// class BemBlock extends BemNode {
//     constructor(name) {
//         super();
//         this.name = name;
//     }

//     toString() {
//         return this.name;
//     }

//     element(name) {
//         return new BemElement(this, name);
//     }   
// }

// class BemElement extends BemNode {
//     constructor(block, name) {
//         super();
//         this.block = block;
//         this.name = name;
//     }

//     toString() {
//         return `${this.block}__${this.name}`;
//     }
// }

// class BoolModifier {
//     constructor(node, flags) {
//         this.node = node;
//         this.flags = flags;
//     }

//     toString() {
//         let classes = [this.node];
//         for(let [key, value] of Object.entries(this.flags)) {
//             if (value) {
//                 classes.push(`${this.node}_${key}`);
//             }
//         }
//         return classes.join(' ');
//     }
// }


export default Task;