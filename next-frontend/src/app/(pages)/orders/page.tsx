import { Metadata } from "next";

import { TopHeaderComponent } from "@/app/components";
import { OrderList } from "./client";
import { ScrollToTop } from "@/app/utils";

export const metadata: Metadata = {
  title:
    "My Orders - Xenrir - Discover Your Fashion Essence, Embrace Limitless Style!",
};

const OrdersPage = async () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex w-full h-auto items-center justify-center">
        <section className="flex flex-col items-center justify-between gap-[20px] w-[90%] h-auto pt-[80px] pb-[170px] 2xl:max-w-[1400px]">
          <TopHeaderComponent title={"Orders"} desc="Check Your Past Orders" />
          <div className="flex w-full h-auto">
            <OrderList />
          </div>
        </section>
      </div>
    </>
  );
};

export default OrdersPage;
