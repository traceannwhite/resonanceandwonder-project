import Link from "next/link";

const SellerProfile = () => {
  return (
    <div>
      <h1>Seller Profile</h1>
      <p>
        To get started selling products on Resonance and Wonder, add products to
        the website by filling out the Add Product form below.{" "}
      </p>
      <Link href="/sellerprofile/addproduct">Add Product</Link>
    </div>
  );
};

export default SellerProfile;
