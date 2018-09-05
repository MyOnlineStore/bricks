declare namespace NodeJS {
    interface Global {
        addEventListener(): void;
        removeEventListener(): void;
        getSelection(): {
            removeAllRanges(): void;
        };
    }
}
