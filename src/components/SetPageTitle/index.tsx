"use client";
import { useEffect } from "react";
import { useTitle } from "@/context/TitleContext";
import { title } from "process";

type Props = {
  title: string;
};
export default function ChartList(props: Props) {
  const { title } = props;
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(title);
  }, [setTitle]);
  return <></>;
}
