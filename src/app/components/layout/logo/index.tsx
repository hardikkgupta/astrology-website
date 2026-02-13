import Image from 'next/image';
import Link from 'next/link';

const Logo = (props: { sticky: boolean }) => {
    const { sticky } = props;
    return (
        <Link href="/">
            <Image
                src={sticky ? "/images/logo/Untitled.svg" : "/images/logo/WhiteLogo2.svg"}
                alt="logo"
                width={190}
                height={34}
                style={{ width: 'auto', height: '50px' }}
                quality={100}
                priority={true}
                className='hidden xsm:block'
            />
            <Image
                src={sticky ? "/images/logo/favicondark.svg?v=2" : "/images/logo/favicon.svg?v=2"}
                alt='logo'
                width={40}
                height={40}
                className='block xsm:hidden'
            />
        </Link>
    );
};

export default Logo;
