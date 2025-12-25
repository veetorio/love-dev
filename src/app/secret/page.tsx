'use client';
import Swal from 'sweetalert2'
import { OtpInput } from "../components/otp";
import { Padlock } from "../components/padlock";
import { PropsWithChildren, useContext, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from "@chakra-ui/react";
import { AbleContext } from "../context/context";
import MeuCanvas from '../components/drawning';
const somarData = (n: number): string => {
    const data = new Date();
    data.setDate(data.getDate() + n);

    return data.toLocaleDateString("pt-BR");
};
export function Modal({ onOpenChange, children, open }: PropsWithChildren<{ open: boolean, onOpenChange: () => void }>) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60" />
                <Dialog.Content className="
          fixed top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          bg-black text-white p-6 rounded-xl
          ">
                    <h1 className="font-bold text-2xl">Insira o codígo</h1>
                    <div className="mt-4">
                        {children}
                    </div>

                    <Dialog.Close className="mt-4 bg-red-600 px-4 py-2 rounded">
                        Fechar
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export function ModalTwo({ onOpenChange, open , valueInp , setInp}: { open: boolean, onOpenChange: () => void ,valueInp : string, setInp : (val : string) => void }) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60" />
                <Dialog.Content className="
          fixed top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          p-4
          bg-black text-white p-6 rounded-xl
          ">
                    <h1 className="font-bold text-2xl">Insira o codígo</h1>
                    <div className="mt-4">
                        <MeuCanvas st={valueInp == "x^2+y^3-1=x^2y^3"}/>
                        <div className='mt-4'>
                            <h4>insira a formula</h4>
                            <Input value={valueInp} onChange={(e) => {
                                console.log(valueInp)
                                setInp(e.target.value)
                            }} />
                        </div>
                    </div>

                    <Dialog.Close className="mt-4 bg-red-600 px-4 py-2 rounded">
                        Fechar
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}



export default function Secret() {
    const context = useContext(AbleContext)
    const [st, setSt] = useState(false)
    const [ab, setAb] = useState(false)
    const [ab2, setAb2] = useState(false)
    const [senha, setSenha] = useState<string>('')
    const [eq, setEq] = useState<string>('')
    const [locks, setLock] = useState({
        lock1: false,
        lock2: false,
    })

    const date100 = new Date()
    return <main className="px-16 py-16">
        <h1 className="text-4xl">Sala secreta</h1>
        <section className="flex h-screen flex-col justify-start items-start mt-4">
            <div className="flex flex-col items-start">
                <h1>digite a senha</h1>
                <div className="w-full flex gap-2 items-end">
                    <Input width={200} value={senha} onChange={(sn) => {
                        setSenha(sn.target.value)
                        const isCorrect = sn.target.value.toLowerCase() === "equalsrose"
                        setAb(isCorrect)
                        setLock((e) => ({
                            ...e,
                            lock1: isCorrect,
                        }))
                        context?.toggleAble('featureA', isCorrect)
                        if (isCorrect) Swal.fire("Segredos novos para você no menu")

                    }} />
                    <Padlock color="white" height={32} width={32} latchHeight={18} latchWidth={22} state={locks.lock1 === false ? "closed" : "open"} />
                </div>
            </div>
            <div className="flex  items-end justify-start gap-2  mt-3">
                <button className={`px-4 py-2 ${ab ? "bg-blue-500" : "bg-gray-500"} rounded-2xl`} onClick={() => {
                    if (ab) {
                        setSt(true)
                    }
                }}>Novo desafio</button>
                <Modal open={st} onOpenChange={() => {
                    setSt(false)
                    if (context?.state.featureB === true) {
                        Swal.fire("Você liberou o seu primeiro presente,dica : Objeto cubico")
                    }
                }} >
                    <OtpInput limit={8 * 9} />
                </Modal>
                {/* <ModalChallengeOne /> */}
                <Padlock color="white" height={32} width={32} latchHeight={18} latchWidth={22} state={context?.state.featureB == false ? "closed" : "open"} />
            </div>
            <div className="flex  items-end justify-start gap-2  mt-3">
                <button className={`px-4 py-2 ${"bg-gray-500"} rounded-2xl`} onClick={() => {
                    if("29/12/2025" === date100.toLocaleDateString("pt_BR") && ab2) {
                        setAb2(true)
                    }
                }}>liberado em {somarData(5)} dias </button>
                {/* <ModalChallengeOne /> */}
                <ModalTwo open={ab2} onOpenChange={() => {
                    setAb2(false)
                }} setInp={setEq} valueInp={eq}/>
                <Padlock color="white" height={32} width={32} latchHeight={18} latchWidth={22} state={eq.replaceAll(" ","") === "x^2+y^3-1=x^2y^3" ? "open" : "closed"} />
            </div>
            <div className="flex  items-end justify-start gap-2  mt-3">
                <button className={`px-4 py-2 ${"bg-gray-500"} rounded-2xl`}>liberado em {somarData(100 - date100.getDate())}</button>
                <Padlock color="white" height={32} width={32} latchHeight={18} latchWidth={22} state={"closed"} />
            </div>
        </section>
    </main>
}