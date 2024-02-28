type a = string;
type b = a extends string ? string : null;
type c = undefined;
// nested CONDITIONAL type

type d = c extends number ? number : a extends boolean ? boolean : never;

type Sheikh = {
  wife1: string;
  wife2: string;
};

type A = keyof Sheikh;

type cheakProperty<T, W> = W extends keyof Sheikh ? true : false;
type CheakWife = cheakProperty<Sheikh, "wife1">;

type Bandhobi = "monika" | "rechel" | "pheobe";

type RemoveBandhobi<T, K> = T extends K ? never : T;

type Result = RemoveBandhobi<Bandhobi, "monica">;
