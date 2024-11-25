import { cn } from "@/lib/utils";
import React from "react";

type IconProps = {
    size?: string | number;
    className?: string;
    id?: string;
};

export const StarIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={cn("inline-block", className)} {...props}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
};

export const HeartFillIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg className={cn("inline-block", className)} {...props} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-labelledby="" role="presentation" fill="none">
            <g stroke="" fill="">
                <path d="M12.8199 5.57961L11.9992 6.40211L11.1759 5.57886C9.07688 3.4798 5.67361 3.4798 3.57455 5.57886C1.47548 7.67793 1.47548 11.0812 3.57455 13.1803L11.4699 21.0756C11.7628 21.3685 12.2377 21.3685 12.5306 21.0756L20.432 13.1788C22.5264 11.0728 22.53 7.67906 20.4306 5.57961C18.3277 3.47672 14.9228 3.47672 12.8199 5.57961Z" fill="currentColor"></path>
            </g>
        </svg>
    );
};

export const HeartIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg className={cn("inline-block", className)} {...props} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-labelledby="" role="presentation" fill="none">
            <g fill="">
                <path d="M12.8199 5.57961L11.9992 6.40211L11.1759 5.57886C9.07688 3.4798 5.67361 3.4798 3.57455 5.57886C1.47548 7.67793 1.47548 11.0812 3.57455 13.1803L11.4699 21.0756C11.7628 21.3685 12.2377 21.3685 12.5306 21.0756L20.432 13.1788C22.5264 11.0728 22.53 7.67906 20.4306 5.57961C18.3277 3.47672 14.9228 3.47672 12.8199 5.57961ZM19.3684 12.1211L12.0002 19.4846L4.63521 12.1196C3.12192 10.6063 3.12192 8.15281 4.63521 6.63952C6.14849 5.12624 8.602 5.12624 10.1153 6.63952L11.4727 7.99697C11.7706 8.29483 12.2553 8.28903 12.5459 7.98412L13.8806 6.64027C15.3977 5.12317 17.8528 5.12316 19.3699 6.64027C20.8836 8.15391 20.881 10.6001 19.3684 12.1211Z" fill="currentColor"></path>
            </g>
        </svg>
    );
};

export const ShareIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 50 50" aria-labelledby="" className={cn("inline-block", className)} {...props} role="presentation" fill="none">
            <g stroke="" fill="currentColor">
                <path d="M13.0208 9.89584C12.192 9.89584 11.3972 10.2251 10.8111 10.8111C10.2251 11.3972 9.89583 12.192 9.89583 13.0208V36.9792C9.89583 37.808 10.2251 38.6028 10.8111 39.1889C11.3972 39.7749 12.192 40.1042 13.0208 40.1042H36.9792C37.808 40.1042 38.6028 39.7749 39.1889 39.1889C39.7749 38.6028 40.1042 37.808 40.1042 36.9792V28.6458C40.1042 28.0933 40.3237 27.5634 40.7144 27.1727C41.1051 26.782 41.635 26.5625 42.1875 26.5625C42.74 26.5625 43.2699 26.782 43.6606 27.1727C44.0513 27.5634 44.2708 28.0933 44.2708 28.6458V36.9792C44.2708 38.913 43.5026 40.7677 42.1352 42.1352C40.7677 43.5026 38.913 44.2708 36.9792 44.2708H13.0208C11.087 44.2708 9.2323 43.5026 7.86485 42.1352C6.49739 40.7677 5.72917 38.913 5.72917 36.9792V13.0208C5.72917 11.087 6.49739 9.2323 7.86485 7.86485C9.2323 6.4974 11.087 5.72917 13.0208 5.72917H21.3542C21.9067 5.72917 22.4366 5.94867 22.8273 6.33937C23.218 6.73007 23.4375 7.25997 23.4375 7.81251C23.4375 8.36504 23.218 8.89494 22.8273 9.28564C22.4366 9.67634 21.9067 9.89584 21.3542 9.89584H13.0208ZM26.5625 7.81251C26.5625 7.25997 26.782 6.73007 27.1727 6.33937C27.5634 5.94867 28.0933 5.72917 28.6458 5.72917H42.1875C42.74 5.72917 43.2699 5.94867 43.6606 6.33937C44.0513 6.73007 44.2708 7.25997 44.2708 7.81251V21.3542C44.2708 21.9067 44.0513 22.4366 43.6606 22.8273C43.2699 23.218 42.74 23.4375 42.1875 23.4375C41.635 23.4375 41.1051 23.218 40.7144 22.8273C40.3237 22.4366 40.1042 21.9067 40.1042 21.3542V12.8417L30.1187 22.8271C29.9266 23.0261 29.6967 23.1848 29.4425 23.294C29.1883 23.4032 28.915 23.4606 28.6383 23.463C28.3617 23.4654 28.0874 23.4127 27.8313 23.308C27.5753 23.2032 27.3427 23.0485 27.1471 22.8529C26.9515 22.6573 26.7968 22.4247 26.692 22.1687C26.5873 21.9126 26.5346 21.6383 26.537 21.3617C26.5394 21.085 26.5969 20.8117 26.706 20.5575C26.8152 20.3033 26.9739 20.0734 27.1729 19.8813L37.1583 9.89584H28.6458C28.0933 9.89584 27.5634 9.67634 27.1727 9.28564C26.782 8.89494 26.5625 8.36504 26.5625 7.81251V7.81251Z"></path>
            </g>
        </svg>
    );
};

export const BinIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 50 50" aria-labelledby="" role="presentation" fill="none" className={cn("inline-block", className)} {...props}>
            <g stroke="" fill="currentColor">
                <path d="M25 3.64583C26.7295 3.64572 28.3934 4.30741 29.6505 5.49515C30.9076 6.68289 31.6625 8.30665 31.7604 10.0333L31.7708 10.4167H42.7083C43.1042 10.4168 43.4853 10.5672 43.7746 10.8374C44.0638 11.1077 44.2397 11.4777 44.2667 11.8727C44.2937 12.2676 44.1698 12.6581 43.9199 12.9652C43.6701 13.2723 43.313 13.4731 42.9208 13.5271L42.7083 13.5417H41.05L38.3833 40.6667C38.2497 42.019 37.6398 43.2798 36.6625 44.2239C35.6851 45.168 34.404 45.734 33.0479 45.8208L32.6813 45.8333H17.3188C15.9593 45.8333 14.6442 45.3498 13.6083 44.4694C12.5725 43.5889 11.8836 42.3688 11.6646 41.0271L11.6167 40.6646L8.94792 13.5417H7.29167C6.91409 13.5417 6.54929 13.4049 6.26473 13.1567C5.98017 12.9086 5.7951 12.5657 5.74375 12.1917L5.72917 11.9792C5.72918 11.6016 5.86592 11.2368 6.1141 10.9522C6.36228 10.6677 6.7051 10.4826 7.07917 10.4313L7.29167 10.4167H18.2292C18.2292 8.62093 18.9425 6.89874 20.2123 5.62896C21.4821 4.35919 23.2043 3.64583 25 3.64583V3.64583ZM37.9104 13.5417H12.0875L14.7271 40.3583C14.7855 40.9567 15.0492 41.5164 15.4734 41.9425C15.8976 42.3685 16.4561 42.6347 17.0542 42.6958L17.3188 42.7083H32.6813C33.9313 42.7083 34.9917 41.8229 35.2333 40.6208L35.275 40.3583L37.9083 13.5417H37.9104ZM28.6458 19.2708C29.0234 19.2708 29.3882 19.4076 29.6728 19.6558C29.9573 19.9039 30.1424 20.2468 30.1938 20.6208L30.2083 20.8333V35.4167C30.2082 35.8125 30.0578 36.1936 29.7876 36.4829C29.5173 36.7722 29.1473 36.9481 28.7523 36.9751C28.3574 37.002 27.9669 36.8781 27.6598 36.6283C27.3527 36.3784 27.1519 36.0214 27.0979 35.6292L27.0833 35.4167V20.8333C27.0833 20.4189 27.248 20.0215 27.541 19.7285C27.834 19.4355 28.2314 19.2708 28.6458 19.2708ZM21.3542 19.2708C21.7317 19.2708 22.0965 19.4076 22.3811 19.6558C22.6657 19.9039 22.8507 20.2468 22.9021 20.6208L22.9167 20.8333V35.4167C22.9165 35.8125 22.7662 36.1936 22.4959 36.4829C22.2256 36.7722 21.8556 36.9481 21.4607 36.9751C21.0657 37.002 20.6752 36.8781 20.3681 36.6283C20.061 36.3784 19.8602 36.0214 19.8063 35.6292L19.7917 35.4167V20.8333C19.7917 20.4189 19.9563 20.0215 20.2493 19.7285C20.5423 19.4355 20.9398 19.2708 21.3542 19.2708ZM25 6.77083C24.085 6.77087 23.2035 7.11494 22.5304 7.73475C21.8574 8.35456 21.442 9.20479 21.3667 10.1167L21.3542 10.4167H28.6458C28.6458 9.44973 28.2617 8.5224 27.578 7.83867C26.8943 7.15495 25.9669 6.77083 25 6.77083Z"></path>
            </g>
        </svg>
    );
};

export const PenIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 50 50" aria-labelledby="" role="presentation" fill="none" className={cn("inline-block", className)} {...props}>
            <g stroke="" fill="#777E90">
                <path d="M43.8125 6.18737C45.2104 7.58529 45.9957 9.48126 45.9957 11.4582C45.9957 13.4351 45.2104 15.3311 43.8125 16.729L18.8792 41.6665C18.3024 42.2436 17.585 42.6601 16.7979 42.8749L6.13959 45.7811C5.87395 45.8532 5.59398 45.8538 5.32802 45.7829C5.06205 45.712 4.81954 45.5721 4.62501 45.3774C4.43049 45.1826 4.29086 44.94 4.22025 44.6739C4.14964 44.4079 4.15057 44.1279 4.22293 43.8624L7.12918 33.204C7.34397 32.4169 7.76047 31.6996 8.33751 31.1228L33.2708 6.18737C34.6688 4.78948 36.5647 4.00415 38.5417 4.00415C40.5186 4.00415 42.4146 4.78948 43.8125 6.18737V6.18737ZM31.25 12.6249L10.5458 33.3332C10.3538 33.5255 10.2152 33.7647 10.1438 34.0269L7.95626 42.0478L15.9771 39.8603C16.2383 39.787 16.476 39.647 16.6667 39.454L37.375 18.7499L31.25 12.6249ZM35.4792 8.3957L33.4583 10.4165L39.5833 16.5415L41.6042 14.5207C42.4029 13.7057 42.8477 12.6084 42.8419 11.4673C42.8362 10.3261 42.3803 9.23339 41.5734 8.42648C40.7665 7.61957 39.6737 7.1637 38.5326 7.15794C37.3915 7.15218 36.2942 7.59698 35.4792 8.3957V8.3957Z"></path>
            </g>
        </svg>
    );
};

export const ChevronIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" data-chevron="true" width={size} height={size} className={cn("inline-block", className)} {...props}>
            <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
    );
};

export const LoadingIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg viewBox="0 0 50 50" width={size} height={size} className={cn("inline-block animate-spin-slow", className)} {...props}>
            <circle className="animate-loading" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
    );
};

export const InstagramIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg aria-hidden="true" focusable="false" role="presentation" width={size} height={size} className={cn("inline-block", className)} {...props} viewBox="0 0 32 32">
            <title>instagram</title>
            <path
                fill="currentColor"
                d="M16 3.094c4.206 0 4.7.019 6.363.094 1.538.069 2.369.325 2.925.544.738.287 1.262.625 1.813 1.175s.894 1.075 1.175 1.813c.212.556.475 1.387.544 2.925.075 1.662.094 2.156.094 6.363s-.019 4.7-.094 6.363c-.069 1.538-.325 2.369-.544 2.925-.288.738-.625 1.262-1.175 1.813s-1.075.894-1.813 1.175c-.556.212-1.387.475-2.925.544-1.663.075-2.156.094-6.363.094s-4.7-.019-6.363-.094c-1.537-.069-2.369-.325-2.925-.544-.737-.288-1.263-.625-1.813-1.175s-.894-1.075-1.175-1.813c-.212-.556-.475-1.387-.544-2.925-.075-1.663-.094-2.156-.094-6.363s.019-4.7.094-6.363c.069-1.537.325-2.369.544-2.925.287-.737.625-1.263 1.175-1.813s1.075-.894 1.813-1.175c.556-.212 1.388-.475 2.925-.544 1.662-.081 2.156-.094 6.363-.094zm0-2.838c-4.275 0-4.813.019-6.494.094-1.675.075-2.819.344-3.819.731-1.037.4-1.913.944-2.788 1.819S1.486 4.656 1.08 5.688c-.387 1-.656 2.144-.731 3.825-.075 1.675-.094 2.213-.094 6.488s.019 4.813.094 6.494c.075 1.675.344 2.819.731 3.825.4 1.038.944 1.913 1.819 2.788s1.756 1.413 2.788 1.819c1 .387 2.144.656 3.825.731s2.213.094 6.494.094 4.813-.019 6.494-.094c1.675-.075 2.819-.344 3.825-.731 1.038-.4 1.913-.944 2.788-1.819s1.413-1.756 1.819-2.788c.387-1 .656-2.144.731-3.825s.094-2.212.094-6.494-.019-4.813-.094-6.494c-.075-1.675-.344-2.819-.731-3.825-.4-1.038-.944-1.913-1.819-2.788s-1.756-1.413-2.788-1.819c-1-.387-2.144-.656-3.825-.731C20.812.275 20.275.256 16 .256z"
            ></path>
            <path fill="currentColor" d="M16 7.912a8.088 8.088 0 0 0 0 16.175c4.463 0 8.087-3.625 8.087-8.088s-3.625-8.088-8.088-8.088zm0 13.338a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 1 1 0 10.5zM26.294 7.594a1.887 1.887 0 1 1-3.774.002 1.887 1.887 0 0 1 3.774-.003z"></path>
        </svg>
    );
};

export const FacebookIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg aria-hidden="true" focusable="false" role="presentation" width={size} height={size} className={cn("inline-block", className)} {...props} viewBox="0 0 14222 14222">
            <path fill="currentColor" d="M14222 7112c0 3549.352-2600.418 6491.344-6000 7024.72V9168h1657l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4968.72C2600.418 13603.344 0 10661.352 0 7112 0 3184.703 3183.703 1 7111 1s7111 3183.703 7111 7111Zm-8222 7025c362 57 733 86 1111 86-377.945 0-749.003-29.485-1111-86.28Zm2222 0v-.28a7107.458 7107.458 0 0 1-167.717 24.267A7407.158 7407.158 0 0 0 8222 14137Zm-167.717 23.987C7745.664 14201.89 7430.797 14223 7111 14223c319.843 0 634.675-21.479 943.283-62.013Z"></path>
        </svg>
    );
};

export const TwitterIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg aria-hidden="true" focusable="false" role="presentation" width={size} height={size} className={cn("inline-block", className)} {...props} viewBox="0 0 20 20">
            <path
                fill="currentColor"
                d="M11.095 5.514c.1-.167.158-.3.249-.409A986.714 986.714 0 0 1 14.67 1.11c.43-.514.876-.614 1.35-.327.53.32.609.932.166 1.485-.477.598-.978 1.178-1.467 1.766-.772.927-1.538 1.862-2.322 2.78-.184.216-.21.358-.038.609 2.158 3.157 4.304 6.323 6.448 9.49.18.266.345.55.463.845.435 1.093-.138 2.07-1.319 2.157-1.61.118-3.226.142-4.829-.11-.95-.15-1.607-.758-2.13-1.513-1.15-1.66-2.28-3.334-3.42-5.002-.071-.105-.155-.203-.289-.377-.086.124-.14.214-.207.295a4455.405 4455.405 0 0 1-4.44 5.31 3.698 3.698 0 0 1-.387.42c-.351.308-.85.304-1.217.008-.353-.286-.466-.811-.194-1.194.352-.495.75-.96 1.139-1.43 1.328-1.6 2.66-3.2 4-4.79.184-.219.16-.371.011-.59a1936.237 1936.237 0 0 1-5.324-7.87c-.205-.304-.4-.63-.533-.97C-.27 1.092.28.095 1.357.045c1.514-.07 3.037-.046 4.553.008 1.13.04 1.915.732 2.532 1.62.791 1.14 1.57 2.287 2.354 3.43.066.096.136.19.297.414l.002-.003Zm-8.888-3.6c.098.168.16.293.237.407 3.38 4.967 6.762 9.933 10.14 14.903.331.487.757.792 1.357.804 1.004.017 2.008.028 3.011.037.065 0 .13-.039.24-.076-.113-.184-.205-.345-.309-.5-2.271-3.352-4.54-6.706-6.816-10.054-1.101-1.62-2.224-3.227-3.324-4.847-.337-.495-.8-.693-1.37-.702-.897-.011-1.793-.02-2.69-.024-.138 0-.276.029-.473.05l-.003.002Z"
            ></path>
        </svg>
    );
};

export const PinterestIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg aria-hidden="true" focusable="false" role="presentation" width={size} height={size} className={cn("inline-block", className)} {...props} viewBox="0 0 256 256">
            <path fill="currentColor" d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"></path>
        </svg>
    );
};

export const UserIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg aria-hidden="true" focusable="false" role="presentation" width={size} height={size} className={cn("inline-block", className)} {...props} viewBox="0 0 64 64">
            <path fill="none" stroke="currentColor" strokeWidth={2} d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16Z"></path>
        </svg>
    );
};

export const CartIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg aria-hidden="true" focusable="false" role="presentation" width={size} height={size} className={cn("inline-block", className)} {...props} viewBox="0 0 64 64">
            <g fill="none" stroke="currentColor" stroke-width="2">
                <path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path>
                <path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path>
            </g>
        </svg>
    );
};

export const ArrowDownIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg aria-hidden="true" focusable="false" role="presentation" width={size} height={size} className={cn("inline-block", className)} {...props} viewBox="0 0 28 16">
            <path d="m1.57 1.59 12.76 12.77L27.1 1.59" stroke-width="2" stroke="currentColor" fill="none"></path>
        </svg>
    );
};

export const AmericanPaymentIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24">
            <title id="pi-american_express">American Express</title>
            <path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path>
            <path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path>
            <path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path>
            <path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path>
            <path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path>
            <path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"></path>
            <path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"></path>
            <path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"></path>
        </svg>
    );
};

export const DinersClubIcon = () => {
    return (
        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-diners_club">
            <title id="pi-diners_club">Diners Club</title>
            <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
            <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
            <path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"></path>
        </svg>
    );
};

export const DiscoverIcon = () => {
    return (
        <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title id="pi-discover">Discover</title>
            <path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
            <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"></path>
            <path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"></path>
            <path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"></path>
            <path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"></path>
            <path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"></path>
            <path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"></path>
            <path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"></path>
            <defs>
                <linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F89F20"></stop>
                    <stop offset=".25" stop-color="#F79A20"></stop>
                    <stop offset=".533" stop-color="#F68D20"></stop>
                    <stop offset=".62" stop-color="#F58720"></stop>
                    <stop offset=".723" stop-color="#F48120"></stop>
                    <stop offset="1" stop-color="#F37521"></stop>
                </linearGradient>
                <linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F58720"></stop>
                    <stop offset=".359" stop-color="#E16F27"></stop>
                    <stop offset=".703" stop-color="#D4602C"></stop>
                    <stop offset=".982" stop-color="#D05B2E"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
};

export const JCBIcon = () => {
    return (
        <svg width="38" height="24" role="img" aria-labelledby="pi-jcb" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
            <title id="pi-jcb">JCB</title>
            <g fill="none" fill-rule="evenodd">
                <g fill-rule="nonzero">
                    <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path>
                </g>
                <path d="M11.5 5H15v11.5a2.5 2.5 0 0 1-2.5 2.5H9V7.5A2.5 2.5 0 0 1 11.5 5z" fill="#006EBC"></path>
                <path d="M18.5 5H22v11.5a2.5 2.5 0 0 1-2.5 2.5H16V7.5A2.5 2.5 0 0 1 18.5 5z" fill="#F00036"></path>
                <path d="M25.5 5H29v11.5a2.5 2.5 0 0 1-2.5 2.5H23V7.5A2.5 2.5 0 0 1 25.5 5z" fill="#2AB419"></path>
                <path d="M10.755 14.5c-1.06 0-2.122-.304-2.656-.987l.78-.676c.068 1.133 3.545 1.24 3.545-.19V9.5h1.802v3.147c0 .728-.574 1.322-1.573 1.632-.466.144-1.365.221-1.898.221zm8.116 0c-.674 0-1.388-.107-1.965-.366-.948-.425-1.312-1.206-1.3-2.199.012-1.014.436-1.782 1.468-2.165 1.319-.49 3.343-.261 3.926.27v.972c-.572-.521-1.958-.898-2.919-.46-.494.226-.737.917-.744 1.448-.006.56.245 1.252.744 1.497.953.467 2.39.04 2.919-.441v1.01c-.358.255-1.253.434-2.129.434zm8.679-2.587c.37-.235.582-.567.582-1.005 0-.438-.116-.687-.348-.939-.206-.207-.58-.469-1.238-.469H23v5h3.546c.696 0 1.097-.23 1.315-.415.283-.25.426-.53.426-.96 0-.431-.155-.908-.737-1.212zm-1.906-.281h-1.428v-1.444h1.495c.956 0 .944 1.444-.067 1.444zm.288 2.157h-1.716v-1.513h1.716c.986 0 1.083 1.513 0 1.513z" fill="#FFF" fill-rule="nonzero"></path>
            </g>
        </svg>
    );
};

export const MaestroIcon = () => {
    return (
        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-maestro">
            <title id="pi-maestro">Maestro</title>
            <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
            <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
            <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
            <circle fill="#00A2E5" cx="23" cy="12" r="7"></circle>
            <path fill="#7375CF" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
        </svg>
    );
};

export const MasterCardIcon = () => {
    return (
        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master">
            <title id="pi-master">Mastercard</title>
            <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
            <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
            <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
            <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
            <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
        </svg>
    );
};

export const UnionIcon = () => {
    return (
        <svg viewBox="-36 25 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-unionpay">
            <title id="pi-unionpay">Union Pay</title>
            <path fill="#005B9A" d="M-36 46.8v.7-.7zM-18.3 25v24h-7.2c-1.3 0-2.1-1-1.8-2.3l4.4-19.4c.3-1.3 1.9-2.3 3.2-2.3h1.4zm12.6 0c-1.3 0-2.9 1-3.2 2.3l-4.5 19.4c-.3 1.3.5 2.3 1.8 2.3h-4.9V25h10.8z"></path>
            <path fill="#E9292D" d="M-19.7 25c-1.3 0-2.9 1.1-3.2 2.3l-4.4 19.4c-.3 1.3.5 2.3 1.8 2.3h-8.9c-.8 0-1.5-.6-1.5-1.4v-21c0-.8.7-1.6 1.5-1.6h14.7z"></path>
            <path fill="#0E73B9" d="M-5.7 25c-1.3 0-2.9 1.1-3.2 2.3l-4.4 19.4c-.3 1.3.5 2.3 1.8 2.3H-26h.5c-1.3 0-2.1-1-1.8-2.3l4.4-19.4c.3-1.3 1.9-2.3 3.2-2.3h14z"></path>
            <path fill="#059DA4" d="M2 26.6v21c0 .8-.6 1.4-1.5 1.4h-12.1c-1.3 0-2.1-1.1-1.8-2.3l4.5-19.4C-8.6 26-7 25-5.7 25H.5c.9 0 1.5.7 1.5 1.6z"></path>
            <path
                fill="#fff"
                d="M-21.122 38.645h.14c.14 0 .28-.07.28-.14l.42-.63h1.19l-.21.35h1.4l-.21.63h-1.68c-.21.28-.42.42-.7.42h-.84l.21-.63m-.21.91h3.01l-.21.7h-1.19l-.21.7h1.19l-.21.7h-1.19l-.28 1.05c-.07.14 0 .28.28.21h.98l-.21.7h-1.89c-.35 0-.49-.21-.35-.63l.35-1.33h-.77l.21-.7h.77l.21-.7h-.7l.21-.7zm4.83-1.75v.42s.56-.42 1.12-.42h1.96l-.77 2.66c-.07.28-.35.49-.77.49h-2.24l-.49 1.89c0 .07 0 .14.14.14h.42l-.14.56h-1.12c-.42 0-.56-.14-.49-.35l1.47-5.39h.91zm1.68.77h-1.75l-.21.7s.28-.21.77-.21h1.05l.14-.49zm-.63 1.68c.14 0 .21 0 .21-.14l.14-.35h-1.75l-.14.56 1.54-.07zm-1.19.84h.98v.42h.28c.14 0 .21-.07.21-.14l.07-.28h.84l-.14.49c-.07.35-.35.49-.77.56h-.56v.77c0 .14.07.21.35.21h.49l-.14.56h-1.19c-.35 0-.49-.14-.49-.49l.07-2.1zm4.2-2.45l.21-.84h1.19l-.07.28s.56-.28 1.05-.28h1.47l-.21.84h-.21l-1.12 3.85h.21l-.21.77h-.21l-.07.35h-1.19l.07-.35h-2.17l.21-.77h.21l1.12-3.85h-.28m1.26 0l-.28 1.05s.49-.21.91-.28c.07-.35.21-.77.21-.77h-.84zm-.49 1.54l-.28 1.12s.56-.28.98-.28c.14-.42.21-.77.21-.77l-.91-.07zm.21 2.31l.21-.77h-.84l-.21.77h.84zm2.87-4.69h1.12l.07.42c0 .07.07.14.21.14h.21l-.21.7h-.77c-.28 0-.49-.07-.49-.35l-.14-.91zm-.35 1.47h3.57l-.21.77h-1.19l-.21.7h1.12l-.21.77h-1.26l-.28.42h.63l.14.84c0 .07.07.14.21.14h.21l-.21.7h-.7c-.35 0-.56-.07-.56-.35l-.14-.77-.56.84c-.14.21-.35.35-.63.35h-1.05l.21-.7h.35c.14 0 .21-.07.35-.21l.84-1.26h-1.05l.21-.77h1.19l.21-.7h-1.19l.21-.77zm-19.74-5.04c-.14.7-.42 1.19-.91 1.54-.49.35-1.12.56-1.89.56-.7 0-1.26-.21-1.54-.56-.21-.28-.35-.56-.35-.98 0-.14 0-.35.07-.56l.84-3.92h1.19l-.77 3.92v.28c0 .21.07.35.14.49.14.21.35.28.7.28s.7-.07.91-.28c.21-.21.42-.42.49-.77l.77-3.92h1.19l-.84 3.92m1.12-1.54h.84l-.07.49.14-.14c.28-.28.63-.42 1.05-.42.35 0 .63.14.77.35.14.21.21.49.14.91l-.49 2.38h-.91l.42-2.17c.07-.28.07-.49 0-.56-.07-.14-.21-.14-.35-.14-.21 0-.42.07-.56.21-.14.14-.28.35-.28.63l-.42 2.03h-.91l.63-3.57m9.8 0h.84l-.07.49.14-.14c.28-.28.63-.42 1.05-.42.35 0 .63.14.77.35s.21.49.14.91l-.49 2.38h-.91l.42-2.24c.07-.21 0-.42-.07-.49-.07-.14-.21-.14-.35-.14-.21 0-.42.07-.56.21-.14.14-.28.35-.28.63l-.42 2.03h-.91l.7-3.57m-5.81 0h.98l-.77 3.5h-.98l.77-3.5m.35-1.33h.98l-.21.84h-.98l.21-.84zm1.4 4.55c-.21-.21-.35-.56-.35-.98v-.21c0-.07 0-.21.07-.28.14-.56.35-1.05.7-1.33.35-.35.84-.49 1.33-.49.42 0 .77.14 1.05.35.21.21.35.56.35.98v.21c0 .07 0 .21-.07.28-.14.56-.35.98-.7 1.33-.35.35-.84.49-1.33.49-.35 0-.7-.14-1.05-.35m1.89-.7c.14-.21.28-.49.35-.84v-.35c0-.21-.07-.35-.14-.49a.635.635 0 0 0-.49-.21c-.28 0-.49.07-.63.28-.14.21-.28.49-.35.84v.28c0 .21.07.35.14.49.14.14.28.21.49.21.28.07.42 0 .63-.21m6.51-4.69h2.52c.49 0 .84.14 1.12.35.28.21.35.56.35.91v.28c0 .07 0 .21-.07.28-.07.49-.35.98-.7 1.26-.42.35-.84.49-1.4.49h-1.4l-.42 2.03h-1.19l1.19-5.6m.56 2.59h1.12c.28 0 .49-.07.7-.21.14-.14.28-.35.35-.63v-.28c0-.21-.07-.35-.21-.42-.14-.07-.35-.14-.7-.14h-.91l-.35 1.68zm8.68 3.71c-.35.77-.7 1.26-.91 1.47-.21.21-.63.7-1.61.7l.07-.63c.84-.28 1.26-1.4 1.54-1.96l-.28-3.78h1.19l.07 2.38.91-2.31h1.05l-2.03 4.13m-2.94-3.85l-.42.28c-.42-.35-.84-.56-1.54-.21-.98.49-1.89 4.13.91 2.94l.14.21h1.12l.7-3.29-.91.07m-.56 1.82c-.21.56-.56.84-.91.77-.28-.14-.35-.63-.21-1.19.21-.56.56-.84.91-.77.28.14.35.63.21 1.19"
            ></path>
        </svg>
    );
};

export const VisaIcon = () => {
    return (
        <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa">
            <title id="pi-visa">Visa</title>
            <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
            <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
            <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path>
        </svg>
    );
};

export const QuickViewIcon = ({ className, size, ...props }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" width={size} height={size} className={cn("inline-block", className)} {...props}>
            <path d="M7.33333 2.75H4.58333C4.0971 2.75 3.63079 2.94315 3.28697 3.28697C2.94315 3.63079 2.75 4.0971 2.75 4.58333V7.33333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M19.25 7.33333V4.58333C19.25 4.0971 19.0568 3.63079 18.713 3.28697C18.3692 2.94315 17.9029 2.75 17.4166 2.75H14.6666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2.75 14.6666V17.4166C2.75 17.9029 2.94315 18.3692 3.28697 18.713C3.63079 19.0568 4.0971 19.25 4.58333 19.25H7.33333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M14.6666 19.25H17.4166C17.9029 19.25 18.3692 19.0568 18.713 18.713C19.0568 18.3692 19.25 17.9029 19.25 17.4166V14.6666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            <rect x="7.5" y="7.5" width="7" height="7" rx="1.5" stroke="currentColor"></rect>
        </svg>
    );
};
