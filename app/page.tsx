"use client";
import Navbar from "@/components/Navbar";
import Share from "@/components/Share";
import LoginCards from "@/components/logincards";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Code, Mail, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const manifesto = () => {
    window.open(
      "https://drive.google.com/file/d/1kpKiFDOFnVnvkY5vkyf78Qd8yJlXxQoK/view?usp=drivesdk"
    );
  };
  const feasibilityReport = () => {
    window.open(
      "https://drive.google.com/file/d/1QgFdDdmFkdpucEuQaMkobPDX4_ci1sBU/view?usp=drivesdk"
    );
  };
  const manifestoVideo = () => {
    window.open(
      "https://drive.google.com/file/d/1QgFdDdmFkdpucEuQaMkobPDX4_ci1sBU/view?usp=drivesdk"
    );
  };
  const whatsappGroup = () => {
    window.open("https://chat.whatsapp.com/KGAhQGXfiKP1A35BGoLMd2");
  };
  const instagramHandle = () => {
    window.open("https://www.instagram.com/akhil_marni?igsh=OWI0c251YmowYWg2");
  };
  return (
    <>
      {/* <Hero /> */}
      <Image
        src="/image/akhil.jpg"
        alt="Logo"
        width={1920}
        height={1080}
        className="h-[124vh] md:h-screen w-full object-cover"
        style={{ objectPosition: "50% 30%" }}
      />
      <div className="flex justify-center">
        <div className="absolute px-4 pt-3 max-w-5xl bg-white border-2 rounded-xl top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <Navbar />
          <div className="border-t-2 border-gray-300 my-3 mx-5"></div>
          <div className="flex justify-center items-center">
            <Image
              src="/image/akhil.jpg"
              alt="Left Logo"
              width={200}
              height={200}
              className="flex justify-center rounded-2xl mt-4"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 mx-20 pt-8">
            <LoginCards
              number={1}
              description="Manifesto"
              handleSubmit={manifesto}
              className="pr-28"
            />
            <LoginCards
              number={2}
              description="Feasibility Report"
              handleSubmit={feasibilityReport}
              className="pr-20"
            />
            <LoginCards
              number={3}
              description="Manifesto Video"
              handleSubmit={manifestoVideo}
              className="pr-20"
            />
            <LoginCards
              number={4}
              description="Whatsapp Group"
              handleSubmit={whatsappGroup}
              className="pr-20"
            />
            <LoginCards
              number={5}
              description="Instagram Handle"
              handleSubmit={instagramHandle}
              className="pr-20"
            />

            <Dialog>
              <DialogTrigger asChild>
                <button>
                  <LoginCards
                    description="Contact details"
                    className="pr-20"
                    number={6}
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader className="flex">
                  <DialogTitle className="flex flex-col items-center">
                    <div className="pb-4">Contact details</div>
                    <Separator />
                    {/* <div className="text-3xl justify-center font-semibold">
                    Akhil Marni
                  </div> */}
                  </DialogTitle>
                </DialogHeader>
                <div className="card">
                  <div className="top">
                    <h2 className="name">Akhil</h2>
                    <Image
                      src="/image/akhil.jpg"
                      alt="Logo"
                      width={30}
                      height={30}
                      className="circle-img"
                    />
                  </div>
                  <div className="bottom">
                    <div className="info flex gap-x-4">
                      <Mail size={24} />
                      <a href="mailto:ee21b084@smail.iitm.ac.in">
                        ee21b084@smail.iitm.ac.in
                      </a>
                    </div>
                    <div className="info flex gap-x-4">
                      <PhoneIcon size={24} />
                      <a href="tel:+917386383555">+91 73863 83555</a>
                    </div>
                    <div className="info flex gap-x-4">
                      <Code size={24} />
                      <Link href="http://instihasakhil.me/">
                        instihasakhil.me
                      </Link>
                    </div>
                  </div>
                </div>

                <DialogFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Share</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Share link</DialogTitle>
                      </DialogHeader>
                      <Share description="contact" />
                      <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                          <Button type="button" variant="secondary">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex mt-8 mb-0.5 items-center justify-center  text-black font-customFont p-4 rounded-md font-bold text-2xl">
            #INSTIHASAKHIL
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <div className="absolute top-0 w-full">
          <div className="relative">
            <video
              autoPlay
              muted
              loop
              className="-rotate-45 h-64 w-64 object-cover"
            >
              <source src="/blackhole.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div> */}
      {/* <div className="flex justify-end absolute top-0 right-0 w-full">
        <div className="relative">
          <video
            autoPlay
            muted
            loop
            className="rotate-70 h-32 w-32 object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
        </div>
      </div> */}
    </>
  );
}
