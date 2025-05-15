"use client"

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import HueControl from '../mint/HueControl';
import { useReadPlanetVAlphaGenerateSvg, useWritePlanetVAlphaMint } from '@/generated';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { useDeployment } from '@/hooks/useDeployment';
import MintPreview from '../mint/MintPreview';
import { extractDope, replaceDope } from '@/services/SVGCombiner';

interface MintSectionProps {
  className?: string;
}

const MintSection: React.FC<MintSectionProps> = ({ className }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const price = 0.08;

  const [originalColorOne, setOriginalColorOne] = useState(0);
  const [planetColorOne, setPlanetColorOne] = useState(0);

  const [originalTwo, setoriginalTwo] = useState(0);
  const [planetTwo, setplanetTwo] = useState(0);

  const [originalThree, setoriginalThree] = useState(0);
  const [planetThree, setplanetThree] = useState(0);

  // const [originalColorTwo, setOriginalColorTwo] = useState(0);
  // const [satLight, setSatLight] = useState({ sat: 25, light: 80, meter: 80, index: 0 });
  // const [planetColorTwo, setPlanetColorTwo] = useState(0);


  const { address } = useAccount();
  const { deploy } = useDeployment();
  const { data: image, isLoading: loadingImage } = useReadPlanetVAlphaGenerateSvg({ address: deploy.Planet, args: [BigInt(0)] });
  const [preview, setPreview] = useState<string>("");

  const { data: hash, error: writeError, writeContract } = useWritePlanetVAlphaMint();

  const { isLoading, isSuccess, data } = useWaitForTransactionReceipt({ hash })


  useEffect(() => {
    if (image == undefined || image == "") {
      return;
    }
    // console.log("image: " + image);
    // console.log("wat: ", window.btoa(String(image)));

    // const startColor = extractDope(image);



    // setPlanetColorOne(Number(startColor));
    // setOriginalColorOne(Number(startColor));


    // const planetColors = extractPlanetColors(image);
    // setPlanetColorOne(planetColors[0]);
    // setPlanetColorTwo(planetColors[1]);

    // setOriginalColorOne(planetColors[0]);
    // setOriginalColorTwo(planetColors[1]);

    // const noise = extractNoiseSeed(image);
    // setOriginalSeed(Number(noise));
    // setNoiseSeed(Number(noise));

    setPreview(window.btoa(String(image)));


  }, [image]);


  // function planetColorChange(colorOne: number, two: number, three: number) {


  //   let newSVG = replaceDope(preview, colorOne);


  //   console.log("wat: ", newSVG);

  //   setPreview(window.btoa(String(newSVG)));


  // }

  return (
    <section id="mint" className={cn("relative min-h-screen flex flex-col items-center justify-center py-24 px-6", className)}>
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background to-background/10" /> */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-background to-background/0" /> */}

      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll glass rounded-lg p-6 order-2 lg:order-1">
            <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/30 text-primary rounded-full">Unlimited Collection</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-mono font-bold leading-tight">
              Scan for a new planet
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed font-signika">
              Each Planet is generated completely onchain.
            </p>

            <div className="mt-6 text-lg text-white/70 leading-relaxed font-signika">
              During the alpha test:
              <ul className="list-disc list-inside">
                <li>Minting is free</li>
                <li>Nothing is permanent</li>
              </ul>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4">
              {/* {[
                { label: 'Primary', value: '5,000' },
                { label: 'Secondary', value: '0.08 ETH' },
                { label: 'Saturation', value: '3,245 / 5,000' },
                { label: 'Terrain', value: 'Aug 15, 2023' }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 font-signika">
                  <p className="text-sm text-white/50">{item.label}</p>
                  <p className="mt-1 text-xl font-medium">{item.value}</p>
                </div>
              ))} */}

              {/* <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 font-signika"> */}


              {/* this one is real */}
              {/* <div className="glass rounded-lg px-4 py-2 font-signika">

                <HueControl
                  reset={() => {
                    setPlanetColorOne(originalColorOne);
                    planetColorChange(originalColorOne, planetTwo, planetThree);
                  }}
                  title="Primary Color"
                  value={planetColorOne}
                  newHue={(h) => {
                    setPlanetColorOne(h);
                    planetColorChange(h, planetTwo, planetThree);
                  }}
                />
              </div> */}

              {/* end real one */}



              {/* <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 font-signika">
              
                <HueControl
                  reset={() => {
                    setplanetTwo(originalTwo);
                    planetColorChange(planetColorOne, originalTwo, planetThree);
                  }}
                  title="Secondary Color"
                  value={planetTwo}
                  newHue={(h) => {
                    setplanetTwo(h);
                    planetColorChange(planetColorOne, h, planetThree);
                  }}
                />
              </div> */}

              {/* <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 font-signika">
                
                <HueControl
                  reset={() => {
                    setplanetThree(originalThree);
                    planetColorChange(planetColorOne, planetTwo, originalThree);
                  }}
                  title="Terrain"
                  value={planetThree}
                  newHue={(h) => {
                    setplanetThree(h);
                    planetColorChange(planetColorOne, planetTwo, h);
                  }}
                />
              </div> */}

            </div>
          </div>


          <div className="reveal-on-scroll delay-200 order-1 lg:order-2">
            <div className="glass rounded-2xl p-6 border border-white/10">
              <MintPreview
                preview={preview}
                size={512}
                tokenId={BigInt(0)}
              />

              {/* <div className="aspect-square rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm border border-white/5 mb-6">
                <div className="w-full h-full flex items-center justify-center bg-black/20 relative">
                  <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse-slow absolute"></div>
                  <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 animate-float absolute"></div>
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary via-primary/70 to-accent animate-glow absolute"></div>
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/80 via-transparent to-transparent rotate-45 animate-float absolute"></div>
                  <div className="text-center z-10">
                    <span className="font-mono text-sm uppercase tracking-widest text-white/70">Preview</span>
                  </div>
                </div>
              </div> */}

              <h3 className="text-2xl font-mono font-bold mb-2 mt-4">Mint your Cosmic NFT</h3>
              <p className="text-white/60 mb-6">Join our community and secure your unique NFT today.</p>

              <div className="flex items-center justify-between mb-6 bg-black/20 rounded-lg p-3 border border-white/5">
                <span className="text-white/70">Price per NFT</span>
                <span className="font-medium"> FREE </span>
                {/* <span className="font-medium">{price} ETH</span> */}
              </div>



              <Button className="w-full"
                onClick={() => {
                  console.log("Accept Assignment button clicked");
                  writeContract({ address: deploy.Planet, args: [address!] });
                }}
              >Mint Now</Button>

              {/* <p className="mt-4 text-center text-xs text-white/50">
                By minting, you agree to our terms and conditions
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MintSection;