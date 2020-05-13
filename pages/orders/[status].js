import fetch from "node-fetch";
import Nav from "components/nav";
import { useRouter } from "next/router";
import RightSidebar, { useToolbar } from "components/rightSidebar";

export default function Orders({}) {
  const router = useRouter();
  const toolbarOptions = useToolbar();
  const { status } = router.query;

  return (
    <>
      <Nav toolbarOptions={toolbarOptions} />
      <RightSidebar toolbarOptions={toolbarOptions} />
      <div className="container p-2 mt-0 mx-auto">
        <h1 className="title">Orders ({status})</h1>
      </div>
    </>
  );
}
