'use client';
import { useContext } from "react";
import Masonry from "./components/bits/grid";
import Scene from "./components/bits/scene";
import Card from "./components/card";
import Carta from "./components/carta";
import Footer from "./components/footer";
import Header from "./components/header";
import { AbleContext } from "./context/context";

const items = Array.from({ length: 8 }, (e, i) => ({
  id: i.toString(),
  img: `/photos/photo${i + 1}.jpg`, // caminho relativo ao /public
  url: "",
  height: 600,
}));
export default function Home() {
  const cntx = useContext(AbleContext)
  console.log(cntx?.state)
  return (
    <div className="w-full flex flex-col  px-24">
      <Header />
      <section className="relative w-full min-h-screen flex justify-center items-center ">
        <div className="z-10 w-full flex flex-col justify-center items-center">
          <h1 className="text-4xl">
            <span className="font-['Great_Vibes'] font-light">
              Para minha amada ,
              <span className="bg-linear-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
                Rosa Azul.
              </span>
            </span>
          </h1>
          <p className="text-md text-gray-400 font-extralight">
            Para nossos momentos divertidos,alegres,fofos e de uma amizade 3 anos que se forma.
          </p>
        </div>
        <div className="w-full z-0 inset-0 h-full absolute brightness-20">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>
      <section className="w-full flex flex-col items-center mt-64">
        <h1 className="text-4xl text-center font-mono font-bold">Timeline</h1>
        <section className="flex flex-wrap gap-2 mt-16">
          <Card caminho="/photos/photo9.jpg" text="primeira vez que saímos, em que a gente saiu para comprar suas roupas para o natal, comemos milho e vimos as luzes" title='" primeiro encontro "'/>
          <Card caminho="/photos/photo10.jpg" text="dia que ganhei meu bechklerspinax" title='3° dia mais feliz'/>
          <Card caminho="/photos/photo11.jpg" text="o dia que encontramos a diva do ONION RINGS e comemos as batatas mais cachorras,mas assistimos thunderbolts" title='1° cinema'/>
          <Card caminho="/photos/photo12.jpg" text="Esse dia foi lindo, mas o fim foi paia" title='Primeiro fora'/>
          <Card caminho="/photos/photo13.jpg" text="O universo é apenas um filme bem roteirizado, o lugar onde tomei o fora foi o lugar em que a gente se assumiu" title='Primeiro rolê já juntos'/>
          <Card caminho="/photos/photo14.jpg" text="A gente saiu para ver kimetsu no yaiba, filmão da porra" title='Chorei pela shinobu'/>
          <Card caminho="/photos/photo15.jpg" text="Até hj você não sabe pegar um onibus direto pra minha casa" title='1° primeira e ultima vc vez em casa'/>
          <Card caminho="/photos/photo16.jpg" text="eu aprendi a ir na sua casa 1° -^- te moggei" title='1° primeira na sua casa'/>
          <Card caminho="/photos/photo17.jpg" text="O dia em que você me quebrou nas espectativas, achei que fossem pokemons,mas são os meus furrys favoritos, me fez até assistir sonic de novo" title='2° dia mais feliz'/>
          <Card caminho="/photos/photo18.jpg" text="O dia que eu mais matei a cabeça pra organizar,fico feliz que você tenha se divertido e se enturmado" title='Seu aniversario'/>
          <Card caminho="/photos/photo19.jpg" text="Nunca vou esquecer o dia que eu te conheci naquela sala de estudo, uma menina dos olhos que não paravam de me olhar. me apaixonei pelo seus belos olhos" title='1° dia mais feliz (o dia que eu a conheci)'/>
        </section>
        <section className="mt-64 w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl">Cartas</h1>
          <section className="w-full flex justify-center flex-wrap gap-16 mt-16">
            <Carta text="Oi meu amor, meu truti frutti, essa carta é apenas uma forma que consigo de demonstrar a minha saudade por seus abraços e seus olhos" />
            <Carta text="Oi de novo meu amor, eu queria falar um pouco sobre uma insegurança minha. eu tenho medo de não ser bom o suficiente pra você" />
            <Carta text="Oi meu amorzinho, se você chegou nessa carta, este site possui alguns segredinhos.então aconselho você a procurar easter aggs, uma dica pra você começar : 'sempre olhe de baixo das coisas'" />
            {
                cntx?.state.featureA && <Carta text="olha como a diva é esperta `^´, bom, se chegou até aqui você é porque está no caminho, use isso : 'Eu te amo' só não esquece de mudar o sistema númerico para um bem conhecido na computação" />
            }
          </section>
        </section>
        <section className="h-screen w-full flex flex-col items-center mt-64">
          <h1 className="text-2xl font-['Great_Vibes'] ">Uma rosa para uma rosa</h1>
          <section className="h-1/2 flex justify-center items-center">
            <Scene />
          </section>
          <p className="font-semibold text-gray-600">feito por Ettore</p>
        </section>
      </section>
      <Footer/>
    </div>
  );
}
