const baseApi: string | undefined = process.env.NEXT_PUBLIC_MY_MAIN_API;

interface points {
  baseApi: string | undefined;
}

export const endPoint: points = {
  baseApi,
};
