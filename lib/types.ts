export interface ObjectType
{
  [index: string]: any;
}

export interface ArrayStringType
{
  [index: number]: any;
}

export interface TypeCounter extends ObjectType
{
  "count": number;
}