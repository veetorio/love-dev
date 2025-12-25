'use client'

import { useEffect, useRef } from 'react'

// Domínio matemático correto
const scale = 4
const xmin = -1.5*scale
const xmax =  1.5*scale
const ymin = -1.5*scale
const ymax =  1.5*scale/2

// Equação correta do coração
const HeartFunction = (x: number, y: number) =>
  (x * x + y * y - 1) ** 3 - (x * x * y * y * y)

export default function MeuCanvas({ st } : { st : boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Conversão matemática → canvas
    const toCanvasX = (x: number) =>
      ((x - xmin) / (xmax - xmin)) * canvas.width

    const toCanvasY = (y: number) =>
      canvas.height - ((y - ymin) / (ymax - ymin)) * canvas.height

    // 1️⃣ Gerar pontos do coração
    const gerarPontos = () => {
      const pontos: { x: number; y: number; angle: number }[] = []

      const step = 0.005
      const eps = 0.001

      for (let x = xmin; x <= xmax; x += step) {
        for (let y = ymin; y <= ymax; y += step) {
          if (Math.abs(HeartFunction(x, y)) < eps) {
            const angle = Math.atan2(y, x) // ordenação circular
            pontos.push({ x, y, angle })
          }
        }
      }

      // Ordena para desenhar em sequência
      pontos.sort((a, b) => a.angle - b.angle)
      return pontos
    }

    const pontos = gerarPontos()

    // 2️⃣ Animação do desenho
    let index = 0

    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'crimson'

      for (let i = 0; i < index && i < pontos.length; i++) {
        const { x, y } = pontos[i]
        ctx.fillRect(
          toCanvasX(x),
          toCanvasY(y),
          3,
          3
        )
      }

      index += 15 // velocidade do desenho

      if (index <= pontos.length) {
        requestAnimationFrame(animate)
      }
    }
    if(st) animate()
  }, [st])

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={300}
      className="border border-gray-300"
    />
  )
}
