import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectWallet() {
  return (
    <section>
      <main className="relative background ">
        <section
          id="connect"
          className="relative items-center min-h-screen pt-48"
        >
          <div
            aria-hidden="true"
            className="relative inset-0 z-0 pt-24 min-w-max bg-gradient-to-b from-clearslate/0 via-clearslate/50 to-clearslate"
          />
          <div className="relative z-10 md:pt-18 bg-clearslate font-anon py-16">
            <section className="text-offwhite text-xl md:px-36">
              <div className="text-2xl md:text-6xl  uppercase leading-normal text-center text-offwhite px-8 md:pt-28">
                Connect your wallet to Join the Cosmic Community
              </div>
              <div className="w-20 mx-auto h-[0px] border-2 mt-8 border-boldorange"></div>

              <div className=" flex justify-center pt-24">
                <ConnectButton
                  chainStatus="icon"
                  accountStatus="address"
                  showBalance={false}
                />
              </div>
            </section>
          </div>
          <div
            aria-hidden="true"
            className="pt-24 relative min-w-max inset-0 z-[1] bg-gradient-to-b from-clearslate via-clearslate/50 to-clearslate/0"
          />
        </section>
      </main>
    </section>
  );
}
