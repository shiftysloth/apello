// import { KeplrExtensionWallet, keplrExtensionInfo, KeplrMobileWallet } from '@cosmos-kit/keplr';
// import { wallets } from '@cosmos-kit/keplr';
// import wallet from '@cosmos-kit/keplr-mobile'
// import { useChain } from '@cosmos-kit/react';
import Image from 'next/image';
import { useAddWallet } from '../hooks/useAddWallet';
import { useTerra } from '../hooks/useTerra';

const ModalConnection = ({open, close}) => {
    const { addWallet,isLoading } = useAddWallet();
    const { connecterra, connectStargaze, connectJuno, connectPetra, connectMartian, connectTeritori } = useTerra();
    //const { chain, status, address, enable, getOfflineSigner, connect } = useChain("stargaze");
    //console.log(status, address)
    const closeModel = ()=>{
        close(false);
    }
    if(!open){
        return 
    }

    const terraClick = ()=>{
        connecterra();
        closeModel();
    }
    const stargazeClick = async()=>{
        connectStargaze();
        closeModel();
        // try{
        // console.log(wallets, wallets[1].client, wallets[1].client.connector._clientId)
        // const client = wallets[1].client
        // alert(wallets[1].client.connector._clientId)
        // //alert("cccc"+wallets[1].client.connector);
        // //alert(client.getAppUrl("android"))
        // client.getAppUrl("ios")
        // const test = await wallets[1].connect() ;
        // alert("connect"+test)
        // await client.enable("stargaze-1")
        // //wallets[0].clientPromise
        // const offlineSigner = await client.getOfflineSigner("stargaze-1");
        // const accounts = await offlineSigner?.getAccounts();
        // console.log(accounts, accounts[0].address)
        // console.log(accounts)
        // if(accounts[0]){
            
        //     await addWallet("stargaze", accounts[0].address);
        // }
        // alert("done!"+accounts[0].address);
        // }catch(err){
        //     alert("error!"+err);
        // }

        //console.log(wallets[0],wallets[0].getChainWallet(),KeplrExtensionWallet);
        
       
    }
    const junoClick = ()=>{
        connectJuno();
        closeModel();
    }
    const petraClick = ()=>{
        connectPetra();
        closeModel();
    }
    const martianClick = ()=>{
        connectMartian();
        closeModel();
    }
    const teritoriClick = ()=>{
        connectTeritori();
        closeModel();
    }
    return ( 
        <div className="fixed inset-0 w-full h-full bg-black/50  z-50  flex justify-center items-center opacity-100 transition-opacity duration-1000" aria-label="modal">

            <div className="bg-noir rounded relative flex flex-col  justify-center m-8 max-w-sm w-full p-6 opacity-100 pb-20 ">
                <div className="relative w-full">
                    <h2 className="font-jura font-bold text-xl">Connect wallet</h2>
                    <button className="absolute top-0 right-0 p-1 rounded-full transition-colors hover:bg-black/20" aria-label="close modal" onClick={closeModel}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>
                <div className="pt-12  flex flex-col justify-center items-center gap-y-4">
                    <button className="inline-flex gap-x-2 px-3 py-3 w-60 rounded bg-[#212529] shadow-[inset_0_0_0_rgba(108,99,255,0.6)] ease-out duration-500 hover:shadow-[inset_240.4px_0_0_rgba(108,99,255,0.99)]" onClick={terraClick} >
                        <Image src="/terra_station.png" height="24" width="24" className="h-6" alt="tera station logo" />
                        <span className="font-azonix ">Terra</span>
                    </button>
                    <button className="inline-flex gap-x-2 px-3 py-3 w-60 rounded bg-[#212529] shadow-[inset_0_0_0_rgba(108,99,255,0.6)] ease-out duration-500 hover:shadow-[inset_240.4px_0_0_rgba(108,99,255,0.99)]" onClick={stargazeClick} >
                        <Image src="/chains/stargaze.png" height="24" width="24" className="h-6" alt="stargaze logo" />
                        <span className="font-azonix ">Stargaze</span>
                    </button>
                    <button className="inline-flex gap-x-2 px-3 py-3 w-60 rounded bg-[#212529] shadow-[inset_0_0_0_rgba(108,99,255,0.6)] ease-out duration-500 hover:shadow-[inset_240.4px_0_0_rgba(108,99,255,0.99)]" onClick={junoClick}>
                        <Image src="/chains/juno.png" height="24" width="24" className="h-6" alt="juno logo" />
                        <span className="font-azonix ">Juno</span>
                    </button>
                    <button className="inline-flex gap-x-2 px-3 py-3 w-60 rounded bg-[#212529] shadow-[inset_0_0_0_rgba(108,99,255,0.6)] ease-out duration-500 hover:shadow-[inset_240.4px_0_0_rgba(108,99,255,0.99)]" onClick={petraClick}>
                        <Image src="/petra.jpg" height="24" width="24" className="h-6" alt="Petra logo" />
                        <span className="font-azonix ">Petra</span>
                    </button>
                    <button className="inline-flex gap-x-2 px-3 py-3 w-60 rounded bg-[#212529] shadow-[inset_0_0_0_rgba(108,99,255,0.6)] ease-out duration-500 hover:shadow-[inset_240.4px_0_0_rgba(108,99,255,0.99)]" onClick={martianClick}>
                        <svg className='h-6 max-w-[22px]' >
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.7636 0.0369041C13.7496 0.0537556 13.66 0.193684 13.5648 0.347835C12.9585 1.32847 12.1173 2.51156 11.2294 3.63232C11.0358 3.87677 11.0049 3.91175 10.9819 3.91234C10.9691 3.91265 10.5371 3.36648 10.2197 2.94867C9.52868 2.03896 8.94656 1.20264 8.45957 0.419884C8.26801 0.111983 8.23492 0.0675592 8.19711 0.0675592C8.09867 0.0675592 6.33455 1.64979 5.24484 2.71542C5.08274 2.87395 5.08249 2.87295 5.31298 3.01922C6.52744 3.79 9.25501 5.95574 9.17035 6.08202C9.00096 6.3347 6.16792 9.29498 5.82858 9.57386L5.78186 9.61227L5.74657 9.56706C5.72714 9.5422 5.57181 9.34561 5.40136 9.13023C4.43996 7.91531 3.54229 6.6371 2.93656 5.62053C2.76597 5.33426 2.75942 5.32621 2.71624 5.35036C2.57742 5.42799 0.0971073 8.39047 0.0439775 8.54209C0.0318392 8.57676 0.0534335 8.59753 0.212186 8.70385C0.974129 9.21412 1.87065 9.88627 2.68453 10.5575C3.17436 10.9615 3.74132 11.4513 3.74108 11.4704C3.73913 11.6105 1.27663 13.5516 0.195421 14.2653C0.0256195 14.3774 0.0033384 14.3971 0.00286897 14.4356C0.00181274 14.5252 2.63291 17.6636 2.709 17.6636C2.73964 17.6636 2.76407 17.6291 2.92002 17.3659C3.52198 16.3495 4.42876 15.0601 5.48236 13.7223C5.62273 13.544 5.75211 13.3876 5.76985 13.3746C5.80587 13.3483 5.89318 13.4304 6.76728 14.3114C7.5125 15.0625 9.12167 16.7816 9.18021 16.8892C9.19937 16.9245 9.16472 16.9577 8.64205 17.404C7.41046 18.456 6.25733 19.3318 5.25022 19.9798C5.01451 20.1316 5.01126 20.1114 5.32062 20.4173C6.17403 21.2614 7.97426 22.9006 8.13199 22.9773C8.1803 23.0008 8.15207 23.0381 8.44519 22.5623C8.99021 21.6776 9.76259 20.5872 10.6267 19.4829C10.8049 19.2551 10.9613 19.0644 10.9741 19.0593C11.0696 19.021 12.629 21.1363 13.3933 22.3408C13.5614 22.6057 13.7109 22.8402 13.7254 22.8619C13.7845 22.95 14.0713 22.7165 15.4185 21.4829C16.8727 20.1514 16.915 20.1028 16.725 19.9794C16.1806 19.6263 15.3005 18.9931 14.7144 18.5332C13.8429 17.8493 12.8031 16.9656 12.8031 16.909C12.8031 16.8177 14.7239 14.778 15.8418 13.6821C16.0285 13.499 16.1814 13.3432 16.1814 13.3359C16.1814 13.3091 15.3864 12.3561 14.8857 11.7825L14.6211 11.4795L14.8689 11.195C15.2116 10.8017 15.5724 10.3757 15.896 9.98234C16.229 9.57751 16.1502 9.58252 16.5276 9.94217C16.9449 10.3399 17.472 10.826 17.862 11.1731C18.2373 11.5069 18.2305 11.4584 17.9383 11.7165C17.4191 12.1754 16.1981 13.3124 16.1981 13.3371C16.1981 13.3426 16.267 13.4334 16.3514 13.539C17.4495 14.9146 18.3908 16.242 19.0332 17.3206C19.2424 17.6717 19.2263 17.6624 19.3636 17.5125C20.2084 16.5899 21.9481 14.4972 21.9485 14.4031C21.9486 14.3849 21.8477 14.3069 21.6765 14.1928C20.6601 13.5152 18.2436 11.6038 18.2436 11.4774C18.2436 11.4074 19.7434 10.17 20.6388 9.5014C20.9785 9.24769 21.785 8.68163 21.9186 8.60315C22.0352 8.5346 22.0445 8.55512 21.6964 8.11384C21.031 7.27034 19.9473 5.98966 19.3811 5.37767C19.2587 5.24549 19.2788 5.22971 19.015 5.66559C18.3847 6.70717 17.6 7.82759 16.6663 9.01888C16.3152 9.4669 16.1976 9.6085 16.1815 9.60233C16.071 9.55984 12.8231 6.16725 12.7817 6.05114C12.7729 6.02658 13.718 5.21974 14.3455 4.7161C15.202 4.0286 15.9336 3.49576 16.7762 2.9456C16.8616 2.88981 16.9022 2.85242 16.9022 2.82977C16.9022 2.74851 15.0898 1.07965 14.0394 0.193737C13.7983 -0.00958677 13.801 -0.00806281 13.7636 0.0369041ZM11.1782 4.17098C11.5497 4.63138 12.3708 5.60078 12.6383 5.89474C12.7786 6.0488 12.7925 6.02099 12.3965 6.37642C11.8585 6.8593 11.0167 7.64704 11.0043 7.67909C10.9993 7.69213 11.0174 7.71056 11.537 8.2229C12.5739 9.24535 14.6054 11.4005 14.6054 11.478C14.6054 11.5277 13.159 13.0914 12.3423 13.9247C11.9125 14.3632 11.1362 15.1339 11.0222 15.2353L10.9853 15.268L10.621 14.9112C9.66196 13.9717 8.59944 12.8615 7.70043 11.8596L7.35917 11.4793L7.55793 11.2569C8.55753 10.138 9.74462 8.89676 10.7451 7.92428C10.8673 7.80553 10.9673 7.69866 10.9673 7.68679C10.9673 7.6528 10.359 7.07579 9.6059 6.39541C9.4058 6.21464 9.23744 6.05887 9.23176 6.04927C9.22608 6.03966 9.33381 5.90379 9.47117 5.74734C9.83634 5.33142 10.257 4.83511 10.6364 4.37244C11.0288 3.89409 10.9719 3.91525 11.1782 4.17098ZM6.05937 9.95289C6.41537 10.3847 6.77145 10.8055 7.08166 11.1611C7.39639 11.5219 7.38912 11.4416 7.1337 11.7353C6.78593 12.1351 6.41734 12.5702 6.0994 12.9561C5.74342 13.3882 5.82982 13.3761 5.48098 13.0431C5.05035 12.632 4.59985 12.2158 4.18142 11.8424C3.72885 11.4385 3.72602 11.5231 4.20657 11.0925C4.64279 10.7016 5.22016 10.1667 5.56038 9.83824C5.68026 9.72252 5.78412 9.6313 5.79118 9.63551C5.79826 9.63972 5.91895 9.78255 6.05937 9.95289ZM11.221 15.4945C11.559 15.8161 12.0957 16.3122 12.4384 16.62C12.7974 16.9424 12.7823 16.894 12.5916 17.1122C12.2533 17.4992 11.6426 18.2196 11.3447 18.5834C11.1711 18.7952 11.0194 18.9747 11.0077 18.982C10.9771 19.0012 10.9408 18.9622 10.5963 18.5395C10.264 18.132 9.73626 17.5096 9.4193 17.1516C9.31021 17.0284 9.22345 16.9203 9.2265 16.9116C9.22953 16.9026 9.38292 16.7601 9.56733 16.5946C9.95244 16.2491 10.482 15.7587 10.7745 15.4771C11.017 15.2434 10.9545 15.241 11.221 15.4945Z" fill="black"></path>
                        </svg>
                        <span className="font-azonix ">Martian</span>
                    </button>
                    <button className="inline-flex gap-x-2 px-3 py-3 w-60 rounded bg-[#212529] shadow-[inset_0_0_0_rgba(108,99,255,0.6)] ease-out duration-500 hover:shadow-[inset_240.4px_0_0_rgba(108,99,255,0.99)]" onClick={teritoriClick}>
                        <Image src="/chains/teritori.png" height="24" width="24" className="h-6" alt="Teritori wallet logo" />
                        <span className="font-azonix ">Teritori</span>
                    </button>
                </div>
                
            </div>

        </div>
     );
}
 
export default ModalConnection;