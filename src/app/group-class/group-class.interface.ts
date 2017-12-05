export interface TrainingType {
  name?: string;
  slogan?: string;
  img?: string;
  images?: string[];
  alt?: string;
  information: string;
}

export interface TrainingTypesGroup {
  [key: string]: TrainingType;
}


