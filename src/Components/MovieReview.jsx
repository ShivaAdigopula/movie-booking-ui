import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
export const MovieReview = ({ url, content, created_at, author_details }) => {
  return (
    <>
      <div className="block  rounded-lg bg-slate-50 m-5 p-5">
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="column"
          spacing={2}
        >
          <Grid
            item
            container
            alignItems="flex-start"
            justify="flex-start"
            direction="row"
            spacing={3}
          >
            <Grid item>
              <Typography variant="caption">
                {author_details.name || author_details.username} says{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Rating
                name="read-only"
                value={author_details.rating / 2}
                readOnly
              />
            </Grid>
            {/* <Grid item>
              <Typography variant="caption">{moment(created_at).format('DD-MM-YYYY')}</Typography>
            </Grid> */}
          </Grid>
          <Grid item>
            <Typography variant="body2">
              <div>
                {content && content.length > 400
                  ? content.split("").splice(0, 200).join("")
                  : content}{" "}
                .....{" "}
              </div>
              <div>
                {url && (
                  <a
                    className="text-[#004cffaa]"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                )}
              </div>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
