export type CssImagesConfig = {
  enabled: boolean;
  maxBytesPerImage: number;
  maxTotalBytes: number;
  fetchTimeoutMs: number;
  followupSnapshotTimeoutMs: number;
  log: boolean;
};

export type SnapshotEnhancements = {
  cssImages: CssImagesConfig;
};

const defaultSnapshotEnhancements: SnapshotEnhancements = {
  cssImages: {
    enabled: false,
    maxBytesPerImage: 1024 * 1024,
    maxTotalBytes: 4096 * 1024,
    fetchTimeoutMs: 2000,
    followupSnapshotTimeoutMs: 3000,
    log: false,
  },
};

let snapshotEnhancements: SnapshotEnhancements = {
  cssImages: { ...defaultSnapshotEnhancements.cssImages },
};

export function configureSnapshotEnhancements(
  config: Partial<SnapshotEnhancements>,
) {
  if (config.cssImages) {
    snapshotEnhancements = {
      ...snapshotEnhancements,
      cssImages: {
        ...snapshotEnhancements.cssImages,
        ...config.cssImages,
      },
    };
  }
}

export function getSnapshotEnhancements(): SnapshotEnhancements {
  return snapshotEnhancements;
}

export function resetSnapshotEnhancements() {
  snapshotEnhancements = {
    cssImages: { ...defaultSnapshotEnhancements.cssImages },
  };
}
