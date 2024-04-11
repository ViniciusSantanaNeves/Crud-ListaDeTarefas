"use client";

import React, { FormEventHandler, useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from "@/api";

const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskvalue, setNewTaskValue] = useState<string>("");

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = 
    async (e) => {
       e.preventDefault(); 
        await addTodo({
        id: uuidv4(),
        text: newTaskvalue,
       });
       setNewTaskValue("");
       setModalOpen(false);
       router.refresh();
    };

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary  w-full">
                Nova Tarefa<AiOutlinePlus className="ml-2" size={15} />
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={(e) => handleSubmitNewTodo(e)}> 
                    <h3 className="font-bold text-lg"> Adicione: Nova Tarefa</h3>
                    <div className="modal-action">
                        <input
                            value={newTaskvalue}
                            onChange={e => setNewTaskValue(e.target.value)}
                            type="text" 
                            placeholder="Type here" 
                            className="input input-bordered w-full"
                        />
                        <button type="submit" className="btn">Enviar</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default AddTask;

