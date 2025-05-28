"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Loader2, AlertCircle, XCircle, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export type TransactionState = "idle" | "loading" | "success" | "error"

interface TransactionButtonProps {
  onClick: () => void
  isLoading?: boolean
  isSuccess?: boolean
    error?: string | null;
  idleText: string
  loadingText: string
  successText: string
  errorText: string
  className?: string
  disabled?: boolean
  resetDelay?: number
}

export function TransactionButton({
  onClick,
  isLoading = false,
  isSuccess = false,
  error = null,
  idleText = "Confirm Transaction",
  loadingText = "Processing...",
  successText = "Transaction Successful",
  errorText = "Transaction Failed",
  className,
  disabled = false,
  resetDelay = 3000,
}: TransactionButtonProps) {
  const [state, setState] = useState<TransactionState>("idle")
  const [showFeedback, setShowFeedback] = useState(false)

  // Update state based on wagmi hook responses
  useEffect(() => {
    if (isLoading) {
      setState("loading")
      setShowFeedback(false)
    } else if (isSuccess) {
      setState("success")
      setShowFeedback(true)

      // Reset to idle after delay
      if (resetDelay > 0) {
        const timer = setTimeout(() => {
          setState("idle")
          setShowFeedback(false)
        }, resetDelay)
        return () => clearTimeout(timer)
      }
    } else if (error) {
      setState("error")
      setShowFeedback(true)

      // Reset to idle after delay
      if (resetDelay > 0) {
        const timer = setTimeout(() => {
          setState("idle")
          setShowFeedback(false)
        }, resetDelay)
        return () => clearTimeout(timer)
      }
    } else if (!isLoading && !isSuccess && !error) {
      setState("idle")
      setShowFeedback(false)
    }
  }, [isLoading, isSuccess, error, resetDelay])

  const handleClick = () => {
    if (state === "loading" || disabled) return
    onClick()
  }

  const getButtonText = () => {
    switch (state) {
      case "loading":
        return loadingText
      case "success":
        return successText
      case "error":
        return errorText
      default:
        return idleText
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        className={cn(
          "min-w-[200px] font-medium transition-all",
          state === "success" && "bg-green-600 hover:bg-green-700 text-white",
          state === "error" && "bg-red-600 hover:bg-red-700 text-white",
          className,
        )}
        onClick={handleClick}
        disabled={disabled || state === "loading"}
      >
        {state === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {state === "success" && <CheckCircle className="mr-2 h-4 w-4" />}
        {state === "error" && <XCircle className="mr-2 h-4 w-4" />}
        {getButtonText()}
      </Button>
      {state === "error" && error && showFeedback && (
        // <p className="text-sm text-red-500 mt-1 text-center max-w-[300px]">{error.message || "Transaction failed"}</p>
                    <div className="text-sm text-muted-foreground mt-2 text-center">
                {error}
            </div>
      )}
      
    </div>
  )
}
