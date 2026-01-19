import { Box, Skeleton } from "@mui/material";

const CardProductsSkeleton = () => {
  return (
    <Box className="bg-white rounded-2xl overflow-hidden w-[320px] mx-auto">
      <Skeleton
        variant="rectangular"
        width="100%"
        height={256} 
        animation="wave"
        sx={{ bgcolor: "#F5F5F5" }}
      />

      <div className="px-6 py-5">
        <Skeleton
          variant="text"
          width="30%"
          height={20}
          sx={{ mb: "8px", transform: 'none' }}
        />

        <Skeleton
          variant="text"
          width="85%"
          height={28}
          sx={{ mb: "12px", transform: 'none' }}
        />

        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton
              key={i}
              variant="circular"
              width={20}
              height={20}
              sx={{ bgcolor: "#E5E5E5" }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Skeleton
            variant="text"
            width="25%"
            height={28}
            sx={{ transform: 'none' }}
          />

          <Skeleton
            variant="circular"
            width={48}
            height={48}
            sx={{ bgcolor: "#E5E5E5" }}
          />
        </div>
      </div>
    </Box>
  );
};

export default CardProductsSkeleton;
