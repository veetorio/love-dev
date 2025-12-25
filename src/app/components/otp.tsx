'use client';

import { useContext, useState } from "react";
import { HStack, PinInput } from "@chakra-ui/react";
import { AbleContext } from "../context/context";
function agruparEmClustersNumericos(array: string[], tamanho: number): number[][] {
  const clusters: number[][] = [];
  for (let i = 0; i < array.length; i += tamanho) {
    const cluster = array
      .slice(i, i + tamanho)
      .map(char => Number(char)); // converte cada caractere para número
    clusters.push(cluster);
  }
  return clusters;
}
const verify = async (vetorBase: number[], vetorTarget: number[]) => {
  let isEquals: boolean = true
  if (!(vetorBase.length === vetorTarget.length)) return
  for (let i = 0; i < vetorBase.length; i++) {
    if (vetorBase[i] !== vetorTarget[i]) {
      isEquals = false;
    }
  }

  return isEquals
}
export function OtpInput(props: { limit: number }) {
  const [value, setValue] = useState<string[]>(Array(props.limit).fill(""));
  const cn = useContext(AbleContext)
  const target = "01100101 01110101 00100000 01110100 01100101 00100000 01100001 01101101 01101111 "
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replaceAll(" ","")
      .slice(0,props.limit)
      .split("");

    const newOtp = [...value];

    pastedData.forEach((char, index) => {
      if (/^\d$/.test(char)) {
        newOtp[index] = char;
      }
    });

    setValue(newOtp);
  };
  return (
    <PinInput.Root
      otp
      value={value}
      onValueChange={(e) => setValue(e.value)}
      onValueComplete={async () => {
        const cluster = agruparEmClustersNumericos(value, 8);
        const clusterTarget = agruparEmClustersNumericos(target.replaceAll(" ", "").split(""), 8);


        // Verifica se todos os clusters existem e têm tamanho correto
        const promises = await Promise.all(cluster.map((e, i) => verify(e, clusterTarget[i])))

        cn?.toggleAble('featureB', promises.every(Boolean))




      }}
    >
      <HStack className="flex justify-center flex-wrap gap-y-4">
        {Array.from({ length: props.limit }).map((_, i) => (
          <div key={i} className="w-1/9 m-0 p-0">
            <PinInput.Input key={i} index={i} onPaste={handlePaste} />
          </div>
        ))}
      </HStack>
    </PinInput.Root>
  );
}
