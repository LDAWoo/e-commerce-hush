import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

const SearchProducts = () => {
    return (
        <div className="mb-7">
            <div className="border-b border-foreground tracking-normal text-[calc(var(--type-base-size)_-_4px)] leading-[12px] uppercase m-[0_8px] mb-1 pb-[7px]">Products</div>
            <ul className="text-[calc(var(--type-base-size)_-_4px)] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 min-[907px]:grid-cols-3 max-w-[707px] overflow-hidden">
                {/* <li className="m-[18px_9px_9px] mt-3">Start typing for search results</li> */}
                <li className="w-full hover:bg-accent p-2 mb-[9px] ">
                    <Link href={`/`} className="w-full h-full">
                        <div className="mb-[9px] h-[145px] relative">
                            <Image src={`https://hush.shop/cdn/shop/files/ONE02717_copy_900x.jpg?v=1721841935`} alt="products" fill className="object-contain" />
                        </div>
                        <span className="line-clamp-2 text-[12px] max-h-[34px] mb-[3px] leading-[17px] overflow-hidden text-ellipsis">Croped Checkered Bomber Jacket</span>
                        <span className="line-clamp-3 text-muted-foreground/70 mb-[2px] text-[10px] leading-[14px] overflow-hidden text-ellipsis">Ladies long sleeve woven cropped checkered bomber jacket with center front zipper opening, welt pockets at front and covered elastic waistband. ֲAvailable in the following color:Black/TaupeComposition: 97% Polyester 3% Spandex WovenWashing Instructions: MACHINE WASH COLD, INSIDE OUT, NO CHLORINE ...</span>
                        <span className="line-clamp-1 text-[10px] leading-[14px] text-muted-foreground/70 mb-[2px] overflow-hidden text-ellipsis">SKU: WB4CM1044T</span>
                        <span className="line-clamp-1 text-[10px] leading-[14px] text-muted-foreground/70 mb-[2px] overflow-hidden text-ellipsis">Vendor: Midi</span>
                        <div className="text-[12px] leading-[20px] font-semibold whitespace-nowrap">
                            <span>$88.95</span>
                        </div>
                    </Link>
                </li>

                <li className="w-full hover:bg-accent p-2 mb-[9px] ">
                    <Link href={`/`} className="w-full h-full">
                        <div className="mb-[9px] h-[145px] relative">
                            <Image src={`https://hush.shop/cdn/shop/files/ONE02717_copy_900x.jpg?v=1721841935`} alt="products" fill className="object-contain" />
                        </div>
                        <span className="line-clamp-2 text-[12px] max-h-[34px] mb-[3px] leading-[17px] overflow-hidden text-ellipsis">Croped Checkered Bomber Jacket</span>
                        <span className="line-clamp-3 text-muted-foreground/70 mb-[2px] text-[10px] leading-[14px] overflow-hidden text-ellipsis">Ladies long sleeve woven cropped checkered bomber jacket with center front zipper opening, welt pockets at front and covered elastic waistband. ֲAvailable in the following color:Black/TaupeComposition: 97% Polyester 3% Spandex WovenWashing Instructions: MACHINE WASH COLD, INSIDE OUT, NO CHLORINE ...</span>
                        <span className="line-clamp-1 text-[10px] leading-[14px] text-muted-foreground/70 mb-[2px] overflow-hidden text-ellipsis">SKU: WB4CM1044T</span>
                        <span className="line-clamp-1 text-[10px] leading-[14px] text-muted-foreground/70 mb-[2px] overflow-hidden text-ellipsis">Vendor: Midi</span>
                        <div className="text-[12px] leading-[20px] font-semibold whitespace-nowrap">
                            <span>$88.95</span>
                        </div>
                    </Link>
                </li>

                <li className="w-full hover:bg-accent p-2 mb-[9px] ">
                    <Link href={`/`} className="w-full h-full">
                        <div className="mb-[9px] h-[145px] relative">
                            <Image src={`https://hush.shop/cdn/shop/files/ONE02717_copy_900x.jpg?v=1721841935`} alt="products" fill className="object-contain" />
                        </div>
                        <span className="line-clamp-2 text-[12px] max-h-[34px] mb-[3px] leading-[17px] overflow-hidden text-ellipsis">Croped Checkered Bomber Jacket</span>
                        <span className="line-clamp-3 text-muted-foreground/70 mb-[2px] text-[10px] leading-[14px] overflow-hidden text-ellipsis">Ladies long sleeve woven cropped checkered bomber jacket with center front zipper opening, welt pockets at front and covered elastic waistband. ֲAvailable in the following color:Black/TaupeComposition: 97% Polyester 3% Spandex WovenWashing Instructions: MACHINE WASH COLD, INSIDE OUT, NO CHLORINE ...</span>
                        <span className="line-clamp-1 text-[10px] leading-[14px] text-muted-foreground/70 mb-[2px] overflow-hidden text-ellipsis">SKU: WB4CM1044T</span>
                        <span className="line-clamp-1 text-[10px] leading-[14px] text-muted-foreground/70 mb-[2px] overflow-hidden text-ellipsis">Vendor: Midi</span>
                        <div className="text-[12px] leading-[20px] font-semibold whitespace-nowrap">
                            <span>$88.95</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default React.memo(SearchProducts);
