import Image from "next/image";
import Link from "next/link";

const CatsPage = () => {
  return (
    <div className="card-container">
      <Link href="/cats/baby-cats">
        <div id="card">
          <Image
            width="100%"
            height="100%"
            src="/images/petit-chat.jpeg"
          />
          <h2>Bébés chats</h2>
        </div>
      </Link>
      <Link href="/cats/kingdom-cats">
        <div id="card">
          <Image
            width="200px"
            height="200px"
            src="/images/chat-lunette.jpeg"
          />
          <h2>Royaume des chats</h2>
        </div>
      </Link>
    </div>
  );
};

export default CatsPage;
