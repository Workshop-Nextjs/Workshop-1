import Image from "next/image";

const BabyPage = () => {
  return (
    <div id="card">
      <Image
        width="500px"
        height="500px"
        src="/images/petit-chat.jpeg"
      />
      <h2>Bébés chats</h2>
    </div>
  );
};

export default BabyPage;
