import Logo from "@/assets/Logo.png"

function Footer() {
  return (
    <footer className="mt-32 bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="Logo" />
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus tempore, temporibus neque amet vitae ex commodi 
                    sapiente error similique totam laborum sunt molestias rerum 
                    perferendis nihil reiciendis! Ratione, voluptatem harum!
                </p>
                <p>
                    © Unlock All Rights Reserved
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Random text</p>
                <p className="my-5">Random text</p>
                <p className="my-5">Random text</p>
                <p>Unlock gym best</p>
            </div>
            <div className="mt-8 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact us</h4>
                <p className="my-5">Random text</p>
                <p>+46 123456789</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
