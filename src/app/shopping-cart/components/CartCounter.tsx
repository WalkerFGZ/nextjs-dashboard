"use client";

import {
  addOne,
  decreaseOne,
  initCounterState,
} from "@/store/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store";

import { useEffect } from "react";

export interface CounterResponse {
  count: number;
}

const getAPICounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter")
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return data;
};

export const CartCounter = ({ value = 0 }) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getAPICounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600
        transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600
        transition-all w-[100px] mr-2"
          onClick={() => dispatch(decreaseOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
