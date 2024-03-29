import React, { Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, Trash } from "lucide-react";
import Button from "./Button";
interface ModalProps {
  title: string;
  description?: string;
  buttonTxt: string;
  buttonVariant?: "delete" | "success";
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  buttonFunction: () => void;
}
export default function Modal({
  title,
  description,
  buttonTxt,
  buttonVariant,
  children,
  isOpen,
  setIsOpen,
  buttonFunction,
}: ModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="fixed bottom-0 w-full transform overflow-hidden rounded-t-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="pb-2 pt-2 text-xl font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                  {children}
                  <div className="mt-8 flex items-center justify-between">
                    <span
                      className="relative z-[99] rounded-full border bg-white p-1.5 text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      <X size={22} />
                    </span>
                    <Button
                      variant={
                        buttonVariant === "delete" ? "relaxed_rose" : "default"
                      }
                      className="relative z-[99]"
                      onClick={buttonFunction}
                    >
                      {buttonVariant === "delete" && <Trash size={18} />}
                      {buttonTxt}
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
