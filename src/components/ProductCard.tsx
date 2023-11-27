import Image from "next/image";
interface Props {
    image: string;
    heading: string;
    price: number;
    description: string;
}

export default function ProductCard({
    image,
    heading,
    price,
    description,
}: Props) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <Image
                width={440}
                height={400}
                layout="intrinsic"
                src={image}
                alt="product image"
            />
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {heading}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
                <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    {price}
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}
