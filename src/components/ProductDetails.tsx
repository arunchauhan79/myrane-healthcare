import { useEffect, useState } from 'react'
import {
    Dialog, DialogBackdrop, DialogPanel, DialogTitle, Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { Product, products } from './../utils/products';

interface ProductDetailsProps {
    productId: number;
    showProductDetails: boolean;
}

const ProductDetails = ({ productId, showProductDetails }: ProductDetailsProps) => {
    const [productDetail, setProductDetail] = useState({} as Product)
    const [open, setOpen] = useState(false)
    useEffect(() => {

        const prodDetails = products.find((product) => product.id === productId)
        if (prodDetails) {
            setProductDetail(prodDetails);
        }
        setOpen(showProductDetails)
    }, [showProductDetails, productId]);



    console.log(showProductDetails, productId, open)


    return (

        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-[70%] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                {/* <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                                </div> */}
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        Product Details
                                    </DialogTitle>
                                    <div
                                        className={`pt-[4rem] pb-8`}
                                    >
                                        <div className="px-4 sm:px-[4rem] h-full">
                                            <div className="flex flex-col md:flex-row gap-0 md:gap-0 h-[45%]">
                                                {/* for desktop View */}
                                                <div className="hidden sm:flex h-auto px-4 sm:px-0">

                                                    <div className="w-[25rem] rounded-xl h-fit">
                                                        <img
                                                            className="rounded-xl max-w-full h-auto"
                                                            src={productDetail.src}
                                                            alt="product image"


                                                        />
                                                    </div>
                                                </div>


                                                <div className="md:flex flex-col px-4 md:px-14">
                                                    <div className="">
                                                        <h2 className="text-xl font-bold mb-2">{productDetail?.name}</h2>

                                                        <p className="text-sm mb-4">{productDetail?.details}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="mt-10">
                                                <div className="w-ful divide-y divide-white/5">

                                                    <Disclosure
                                                        as="div"
                                                        className="my-5 px-4 py-4  shadow-lg  bg-white rounded-xl"
                                                        defaultOpen={true}
                                                    >
                                                        <DisclosureButton className="group flex w-full items-center justify-between">
                                                            <span className="text-sm/6 font-semibold text-black">Key Ingredients</span>
                                                            <ChevronDownIcon className="size-5 fill-white/60  group-data-[open]:rotate-180" />
                                                        </DisclosureButton>
                                                        <DisclosurePanel className="mt-2 text-sm/5">
                                                            <hr className="my-2 border-slate-200" />
                                                            <div className="hidden sm:flex sm:flex-row gap-3">
                                                                <div className="w-[70%]">

                                                                    <ul>
                                                                        {productDetail?.keyIngredients?.map((benefit: any) => (
                                                                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                                                                -
                                                                                <span>{benefit}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>

                                                            </div>


                                                        </DisclosurePanel>
                                                    </Disclosure>

                                                </div>
                                            </div>
                                            <div className="mt-10">
                                                <div className="w-ful divide-y divide-white/5">

                                                    <Disclosure
                                                        as="div"
                                                        className="my-5 px-4 py-4  shadow-lg  bg-white rounded-xl"
                                                        defaultOpen={true}
                                                    >
                                                        <DisclosureButton className="group flex w-full items-center justify-between">
                                                            <span className="text-sm/6 font-semibold text-black">Key Benefits</span>
                                                            <ChevronDownIcon className="size-5 fill-white/60  group-data-[open]:rotate-180" />
                                                        </DisclosureButton>
                                                        <DisclosurePanel className="mt-2 text-sm/5">
                                                            <hr className="my-2 border-slate-200" />
                                                            <div className="hidden sm:flex sm:flex-row gap-3">
                                                                <div className="w-[70%]">

                                                                    <ul>
                                                                        {productDetail?.keyBenefits?.map((benefit: any) => (
                                                                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                                                                -
                                                                                <span>{benefit}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>

                                                            </div>


                                                        </DisclosurePanel>
                                                    </Disclosure>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            {/* <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                                Deactivate
                            </button> */}
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Close
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default ProductDetails