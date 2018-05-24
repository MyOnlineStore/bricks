type RecursivePartial<GenericType> = {
    [KeyType in keyof GenericType]?: RecursivePartial<GenericType[KeyType]>
};

export default RecursivePartial;
