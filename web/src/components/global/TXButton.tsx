"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

interface TXButtonProps {
    callToAction: string;
    onClick: () => void;
    state: "idle" | "loading" | "success" | "error";
    error?: string | null; 
}

export default function TXButton({ callToAction, onClick, state , error}: TXButtonProps) {


    //   const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle")

    //   useEffect(() => {
    //     let timer: NodeJS.Timeout

    //     if (state === "loading") {
    //       timer = setTimeout(() => {
    //         setState("success")
    //       }, 4000)
    //     }

    //     return () => clearTimeout(timer)
    //   }, [state])

    //   const handleClick = () => {
    //     if (state === "idle" || state === "success") {
    //       setState("loading")
    //     }
    //   }

    return (
    <div>
        <div className="flex items-center justify-center ">
            <motion.button
                onClick={onClick}
                className={`
            w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2
          ${state === "idle"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : state === "loading"
                            ? "bg-background text-white/50 border"
                            : state === "success"
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                    }
        `}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 0.1 }}
            >
                <AnimatePresence mode="wait">
                    {state === "idle" && (
                        <motion.span
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                        >
                            {callToAction}
                        </motion.span>
                    )}

                    {state === "loading" && (
                        <motion.div
                            key="loading"
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                            >
                                <Loader2 className="w-5 h-5" />
                            </motion.div>
                            <span>Loading</span>
                        </motion.div>
                    )}
                    {state === "success" && (
                        <motion.div
                            key="success"
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}

                        >
                            <CheckCircle className="w-5 h-5" />
                            <span>Success!</span>
                        </motion.div>
                    )}
                    {state === "error" && (
                        <motion.div
                            key="error"
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                        >
                            {/* <CheckCircle className="w-5 h-5" /> */}
                            <XCircle className="w-5 h-5 text-white" />
                            <span>Error, try again?</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
        <div className="text-sm text-muted-foreground mt-2 text-center">
            {/* state is: {state} and this can be long perhaps many lines who knows how long it can be, but it should still work and not break the layout, so we can test how it behaves with long text. */}
            {error}

        </div>
    </div>
    )
}


export function TestTXButton() {
    const [State, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

    return (
        <TXButton
            callToAction={"click me"}
            // onClick={() => isActive ? deactivate(job.id) : activate(job.id)}
            onClick={() => {
                if (State === "idle") {
                    setState("loading");
                } else if (State === "loading") {
                    setState("success");
                } else if (State === "success") {
                    setState("error");
                } else if (State === "error") {
                    setState("idle");
                }
            }}
            state={State}

        />
    )

}
