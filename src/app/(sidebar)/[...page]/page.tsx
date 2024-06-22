import React from "react";
import ItemPage from "./pages/ItemsPage";
import PreviewPage from "./pages/previewPage";
import { notFound } from "next/navigation";

const DenamicPage = ({ params }: { params: { page: string } }) => {
    const HOSTURL = process.env.HOST_URL
  if (params.page.length == 1) {
    return <ItemPage category={params.page[0]} />
  }
  if (params.page.length == 2) {
    return <PreviewPage category={params.page[0]} id={params.page[1]} hosturl={HOSTURL} />
  }
  if (params.page.length >= 2) return notFound()
};

export default DenamicPage;
