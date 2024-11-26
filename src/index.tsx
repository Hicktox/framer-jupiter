import React, { useEffect } from 'react'
import { addPropertyControls, ControlType } from 'framer'
import { init } from '@jup-ag/terminal'
import '@jup-ag/terminal/css'

// Типы
interface Props {
    width: number
    height: number
}

export default function JupiterTerminal(props: Props) {
    useEffect(() => {
        init({
            displayMode: 'integrated',
            integratedTargetId: 'integrated-terminal',
            endpoint: 'https://api.mainnet-beta.solana.com',
            strictTokenList: true,
            defaultExplorer: 'Solana Explorer',
            containerStyles: { 
                maxHeight: '90vh',
                background: 'transparent'
            },
            formProps: {
                fixedOutputMint: true,
                swapMode: "ExactIn",
                initialOutputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
            },
            onSuccess: ({ txid }) => {
                console.log("Swap success:", txid)
            },
            onSwapError: ({ error }) => {
                console.error("Swap error:", error)
            }
        })
    }, [])

    return (
        <div 
            id="integrated-terminal" 
            style={{ 
                width: props.width, 
                height: props.height,
                borderRadius: '12px',
                overflow: 'hidden'
            }} 
        />
    )
}

// Framer контролы
addPropertyControls(JupiterTerminal, {
    width: {
        type: ControlType.Number,
        defaultValue: 400,
        min: 200,
        max: 1000
    },
    height: {
        type: ControlType.Number,
        defaultValue: 600,
        min: 300,
        max: 1000
    }
})
