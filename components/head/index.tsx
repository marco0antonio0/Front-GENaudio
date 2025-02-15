import { useRouter } from "next/router";
import LoginModal from "@/components/modal/LoginModal";
import CadastroModal from "@/components/modal/CadastroModal";

export const Logo = () => {
    const r = useRouter()
  return (
    <svg width="180" height="35" viewBox="0 0 212 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer lgi:w-[150px] lgi:ml-5" onClick={()=>{r.push('/')}}>
    <g clipPath="url(#clip0_24_4)">
    <path d="M21.4544 12.8359C21.2407 12.0928 20.9404 11.4362 20.5535 10.8661C20.1667 10.2859 19.6933 9.79721 19.1334 9.40019C18.5837 8.993 17.9526 8.68251 17.24 8.46873C16.5375 8.25495 15.7588 8.14806 14.9037 8.14806C13.3054 8.14806 11.9006 8.54508 10.6892 9.33911C9.48793 10.1332 8.55138 11.2886 7.87951 12.8054C7.20763 14.312 6.87169 16.1546 6.87169 18.3331C6.87169 20.5116 7.20254 22.3643 7.86424 23.8913C8.52593 25.4183 9.46249 26.5839 10.6739 27.3881C11.8853 28.1822 13.3156 28.5792 14.9647 28.5792C16.4612 28.5792 17.7388 28.3145 18.7975 27.7852C19.8664 27.2456 20.6808 26.4872 21.2407 25.5099C21.8107 24.5327 22.0958 23.3772 22.0958 22.0437L23.4395 22.2422H15.377V17.2642H28.4633V21.2038C28.4633 23.9524 27.8831 26.3142 26.7226 28.2891C25.562 30.2538 23.9638 31.7706 21.9278 32.8395C19.8918 33.8982 17.5606 34.4276 14.9342 34.4276C12.0024 34.4276 9.42686 33.7811 7.20763 32.4883C4.98841 31.1853 3.25782 29.3376 2.01587 26.9453C0.784098 24.5429 0.168213 21.6925 0.168213 18.3942C0.168213 15.8594 0.53469 13.5994 1.26765 11.6143C2.01078 9.61906 3.04913 7.92919 4.3827 6.54472C5.71627 5.16025 7.26871 4.10663 9.04002 3.38386C10.8113 2.66108 12.7303 2.29969 14.7968 2.29969C16.5681 2.29969 18.2172 2.55928 19.7442 3.07846C21.2712 3.58746 22.6251 4.31023 23.806 5.24678C24.9971 6.18334 25.9692 7.29804 26.7226 8.59089C27.4759 9.87356 27.9594 11.2886 28.1732 12.8359H21.4544ZM33.4299 34V2.72725H50L54.5 7L54.5023 8.1786H40.0417V15.6303H50.5L53.5 20L53.4181 21.0817H40.0417V28.5487L52 28.5L54.5634 32.8395V34H33.4299ZM85.9163 5V28.9304L80.2053 34L66.5999 14.3171H66.3708V34H59.759V6L64 2.72725H65.5615L79.0601 22.3949H79.335V2.72725H81L85.9163 5ZM96.7693 34H89.6841L100.48 2.72725H108.5L109 6L119.781 34H112.696L104.862 9.87356H104.618L96.7693 34ZM96.3265 21.7077H113.062V26.869H96.3265V21.7077ZM138.464 24.0135V10.5455H141.5L145 14L144.969 34H138.723V29.7397H138.479C137.95 31.114 137.069 32.2185 135.837 33.0533C134.616 33.888 133.124 34.3054 131.363 34.3054C129.796 34.3054 128.416 33.9491 127.225 33.2365C126.034 32.5239 125.103 31.511 124.431 30.1978C123.769 28.8846 123.433 27.3118 123.423 25.4794V10.5455H129.928V24.3189C129.938 25.7034 130.31 26.7977 131.043 27.6019C131.776 28.4061 132.758 28.8082 133.99 28.8082C134.774 28.8082 135.507 28.6301 136.189 28.2738C136.871 27.9073 137.42 27.3678 137.838 26.6552C138.265 25.9426 138.474 25.062 138.464 24.0135ZM158.815 34.3817C157.033 34.3817 155.42 33.9237 153.974 33.0075C152.539 32.0811 151.399 30.7221 150.554 28.9304C149.719 27.1286 149.302 24.9195 149.302 22.3033C149.302 19.6158 149.734 17.3813 150.6 15.5998C151.465 13.8081 152.615 12.4695 154.051 11.5838C155.496 10.688 157.079 10.2401 158.8 10.2401C160.113 10.2401 161.207 10.464 162.083 10.9119C162.968 11.3497 163.681 11.8994 164.22 12.5611C164.77 13.2126 165.187 13.8539 165.472 14.4851H165.671V2.72725H168.5L172.161 7V34H165.747V30.2436H165.472C165.167 30.8951 164.734 31.5415 164.175 32.1829C163.625 32.814 162.907 33.3383 162.021 33.7557C161.146 34.1731 160.077 34.3817 158.815 34.3817ZM160.876 29.2053C161.925 29.2053 162.81 28.9202 163.533 28.3501C164.266 27.7699 164.826 26.9606 165.213 25.9222C165.61 24.8839 165.808 23.6674 165.808 22.2727C165.808 20.8781 165.615 19.6667 165.228 18.6385C164.841 17.6103 164.281 16.8163 163.548 16.2564C162.816 15.6965 161.925 15.4165 160.876 15.4165C159.807 15.4165 158.906 15.7067 158.173 16.2869C157.441 16.8672 156.886 17.6714 156.509 18.6996C156.132 19.7277 155.944 20.9188 155.944 22.2727C155.944 23.6368 156.132 24.8432 156.509 25.8917C156.896 26.93 157.451 27.7444 158.173 28.3349C158.906 28.9151 159.807 29.2053 160.876 29.2053ZM177.509 34V10.5455H184.014V34H177.509ZM180.777 7.522C179.81 7.522 178.98 7.20133 178.288 6.55999C177.606 5.90848 177.265 5.12971 177.265 4.2237C177.265 3.32787 177.606 2.55928 178.288 1.91795C178.98 1.26643 179.81 0.940674 180.777 0.940674C181.744 0.940674 182.568 1.26643 183.25 1.91795C183.943 2.55928 184.289 3.32787 184.289 4.2237C184.289 5.12971 183.943 5.90848 183.25 6.55999C182.568 7.20133 181.744 7.522 180.777 7.522ZM199.822 34.4581C197.45 34.4581 195.399 33.9542 193.668 32.9464C191.948 31.9284 190.619 30.5134 189.683 28.7013C188.746 26.8791 188.278 24.7668 188.278 22.3643C188.278 19.9415 188.746 17.8241 189.683 16.0121C190.619 14.1899 191.948 12.7749 193.668 11.767C195.399 10.7491 197.45 10.2401 199.822 10.2401C202.194 10.2401 204.24 10.7491 205.961 11.767C207.691 12.7749 209.025 14.1899 209.961 16.0121C210.898 17.8241 211.366 19.9415 211.366 22.3643C211.366 24.7668 210.898 26.8791 209.961 28.7013C209.025 30.5134 207.691 31.9284 205.961 32.9464C204.24 33.9542 202.194 34.4581 199.822 34.4581ZM199.853 29.419C200.932 29.419 201.833 29.1136 202.555 28.5028C203.278 27.8819 203.823 27.0369 204.189 25.968C204.566 24.8991 204.754 23.6826 204.754 22.3185C204.754 20.9544 204.566 19.7379 204.189 18.669C203.823 17.6001 203.278 16.7552 202.555 16.1342C201.833 15.5133 200.932 15.2028 199.853 15.2028C198.763 15.2028 197.847 15.5133 197.104 16.1342C196.371 16.7552 195.816 17.6001 195.44 18.669C195.073 19.7379 194.89 20.9544 194.89 22.3185C194.89 23.6826 195.073 24.8991 195.44 25.968C195.816 27.0369 196.371 27.8819 197.104 28.5028C197.847 29.1136 198.763 29.419 199.853 29.419Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_24_4">
    <rect width="212" height="35" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );
};

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownMenu,
  DropdownTrigger,
  Avatar,
  Dropdown,
  DropdownItem,
} from "@heroui/react";


export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [isCadastroModalOpen, setIsCadastroModalOpen] = React.useState(false);
  var dataUser = {
    image:"https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email:"zoey@example.com",
    name:"zoey",
    age:"22",
    isLogin:false,
  }
  const menuItems = [
    {name:"Inicio",ref:"/"},
    {name:"Planos",ref:"/planos"},
    {name:"Sobre",ref:"/sobre"},
  ];
  const router = useRouter()
  const isActive = (path: string) => router.pathname === path;
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}  isBlurred={true} shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className={`${
              isActive("/") ? "text-primary" : "text-foreground"
            }`}>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/planos" className={`${
              isActive("/planos") ? "text-primary" : "text-foreground"
            }`}>
            Planos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/sobre" className={`${
              isActive("/sobre") ? "text-primary" : "text-foreground"
            }`}>
            Sobre
          </Link>
        </NavbarItem>
      </NavbarContent>
      {dataUser.isLogin?null:
      <NavbarContent justify="end">
        <div className="hidden lg:flex">
          <Button className="text-blue-600" variant="light" onClick={() => setIsLoginModalOpen(true)}>
            Login
          </Button>
          <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
        </div>
        <div className="hidden lg:flex">
          <Button className="bg-blue-200 text-blue-700" onClick={() => setIsCadastroModalOpen(true)}>
            Sign Up
          </Button>
          <CadastroModal isOpen={isCadastroModalOpen} onClose={() => setIsCadastroModalOpen(false)} />
        </div>
      </NavbarContent>}
      <NavbarMenu className="w-[100%] h-[100%] py-10">
        {menuItems.map((item, index) => {
            return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className={`w-[100%] h-[100%] text-2xl ${
                    isActive(item.ref) ? "text-primary" : "text-foreground"
                  }`}
                    href={item.ref}
                    size="lg"
                  >
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              )
        })}
      </NavbarMenu>
      
     {dataUser.isLogin ?
     <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={dataUser.name}
              size="sm"
              src={dataUser.image}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Conectado como</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Configurações</DropdownItem>
   
            <DropdownItem key="help_and_feedback">Ajuda e Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Sair
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>:null}
    </Navbar>
  );
}

