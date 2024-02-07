import { Button } from "flowbite-react";


export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 items-center rounded-tl-3xl rounded-br-3xl text-center justify-between">
        <div className="flex-1 justify-center flex flex-col">
            <h2 className="text-2xl">
                Do you feel like a weirdo?
            </h2>
            <p className="text-gray-500 my-2">
                Welcome to our social platform for weirdos!
            </p>
            <Button gradientDuoTone='purpleToPink' className="rounded-tl-xl
            rounded-bl-none">
                <a href="https://chimerical-cupcake-e49e36.netlify.app" target="_blank"
                rel='noopener noreferrer'>Shadapedia</a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.shutterstock.com/image-vector/hand-drawn-vector-
            doodles-set-600nw-1425794720.jpg" />
        </div>
    </div>
  );
}
