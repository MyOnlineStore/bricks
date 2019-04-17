type RecursivePartialType<GenericType> = {
    [KeyType in keyof GenericType]?: RecursivePartialType<GenericType[KeyType]>
};

export default RecursivePartialType;
