import Image from "next/image";

import { countryToCodeData, countryToEmojiData } from "@/data";

import { ICart } from "@/app/types";

import { CheckoutBtn, UpdateCart } from "./client";

export const CartItem = ({ cart }: { cart: ICart[] }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {cart.map((crt) => {
        const countryCode = countryToCodeData.get(crt.origin) || "";

        const countryEmoji = countryToEmojiData.get(countryCode);
        return (
          <div
            key={crt._id + crt.sized}
            className="grid gap-x-3 grid-cols-12 w-full"
          >
            <div className="col-span-3 w-full aspect-square relative flex items-center justify-center overflow-hidden rounded-lg">
              <Image
                src={crt.images[0]}
                alt={crt.alt[0]}
                fill
                draggable={false}
                className="object-cover rounded-lg hover:scale-[1.08] cursor-pointer transition-all duration-[0.6s]"
                sizes="400px"
              />
            </div>
            <div className="col-span-7 flex flex-col w-full">
              <h1 className="font-sansita text-[35px] leading-[1]">
                {crt.name}
              </h1>
              <h1 className="font-pridi font-bold text-[35px] leading-[1]">
                {crt.brand}
              </h1>
              <h3 className="flex items-center gap-4 mt-[10px]">
                <div className="text-[25px] font-bold leading-[1]">
                  Delivers From:
                </div>
                <div className="flex items-center gap-[10px]">
                  {countryEmoji && countryEmoji.image && (
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={countryEmoji.image}
                        alt={crt.origin}
                        fill
                        draggable={false}
                        sizes="40px"
                      />
                    </div>
                  )}
                  <div className="text-[22px] font-sansita font-bold">
                    {crt.origin}
                  </div>
                </div>
              </h3>
              <h3 className="text-[25px] leading-[1]">Size: {crt.sized}</h3>
              <h3 className="text-[25px] leading-[1] mb-[10px]">
                Price: $ {crt.price}
              </h3>
              <UpdateCart cart={crt} />
            </div>
            <div className="col-span-2 h-full w-full flex items-center justify-center mb-[40px]">
              <div className="flex flex-col items-center justify-center font-mochiy text-[25px] font-bold leading-[1]">
                <div>Total:</div>
                <div>$ {crt.price * crt.quantity}</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="col-span-12 flex items-center justify-center w-full">
        <hr className="border border-[1px_solid_var(--primary-1)] w-full" />
      </div>
      <div className="col-span-12 flex justify-end w-full font-mochiy text-[25px]">
        Grand Total: ${" "}
        {cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)}
      </div>
      <div className="col-span-12 flex w-full items-center justify-center">
        <CheckoutBtn cart={cart} />
      </div>
    </div>
  );
};
